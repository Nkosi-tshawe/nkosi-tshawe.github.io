/*
	Project Name : Marist

	## Document Ready
		- Scrolling Navigation
		- Responsive Caret

	## Window Load
		- Site Loader
*/

(function($) {

	"use strict"
	
	/* Google-map-black & white */
	function initialize(obj) {

		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = $('#'+obj).attr("data-marker");
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"),10);
		var styles = []
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,						
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$('.menu-block').addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.menu-block').removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$('.menu-block').removeClass("navbar-fixed-top animated fadeInDown");
		} // set sticky menu - end		
	});
	
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {

		/* - Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();		
		
		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$('.menu-block').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.menu-block').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.menu-block').removeClass("navbar-fixed-top");
		} // set sticky menu - end
		
		$('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])').bind('click', function(e) {

			var $anchor = $(this);
			
			$('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 49 }, 1500, 'easeInOutExpo');
			
			e.preventDefault();
		});

		/* - Responsive Caret */
		$('.guidance-tabpanel .nav-tabs li > a').on('click', function() {
			$('html, body').animate({ scrollTop: $(".tab-content").offset().top - 120 }, 2000 );
		});

		// Expand Panel
		$("#slideit").on("click", function()
		{
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});	

		// Collapse Panel
		$("#closeit").on("click", function()
		{
			$("#slidepanel").slideUp("slow");	
			$("html").animate({ scrollTop: 0 }, 1000);
		});		

		// Switch buttons from "Log In | Register" to "Close Panel" on click
		$("#toggle a").on("click", function ()
		{
			$("#toggle a").toggle();
		});

		/* - Responsive Caret */
		$('.ddl-switch').on('click', function() {

			var li = $(this).parent();

			if ( li.hasClass('ddl-active') || li.find('.ddl-active').length !== 0 || li.find('.dropdown-menu').is(':visible') ) {
				li.removeClass('ddl-active');
				li.children().find('.ddl-active').removeClass('ddl-active');
				li.children('.dropdown-menu').slideUp();	
			}
			else {
				li.addClass('ddl-active');
				li.children('.dropdown-menu').slideDown();
			}
		});
		
		new UISearch( document.getElementById( 'sb-search' ) );

		/* - Recent Listing Section */
		if( $(".recent-listing-carousel").length ) {
			$(".recent-listing-carousel").owlCarousel({
				loop: true,				
				margin: 0,
				dots: false,
				nav: true,
				autoplay:false,				
				autoplayHoverPause:true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:3
					}
				}
			});
		}
		
		/* - Blog Shape */
		var triangle_shape_count = 0;
		triangle_shape_count = $( "[id*='triangle-']" ).length;
		for(var i=1; i<=triangle_shape_count; i++)
		{
			$( "[id*='triangle-"+i+"']" ).css("clip-path","url('#triangle_shape-"+i+"')");
		}		
		
		/* - Banner Map */
		if( $('#map-canvas').length == 1 ){
			initialize('map-canvas');
		}
		
		/* -- Feature Listing Map */
		var feature_map;
		var feature_count = $( "[id*='feature_map-']" ).length;
		//alert(feature_count);
		for( var i=1; i<=feature_count; i++ )
		{
			initialize($( "[id*='feature_map-"+i+"']" ).attr( "id" ));
		}
		
		/* - Client Carousel */
		if( $(".clients-carousel").length ) {
			$(".clients-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: false,
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					600:{
						items: 3
					},
					1000:{
						items: 5
					}
				}
			});
		}
		
		/* - Contact Map */
		if( $('#map-canvas-contact').length == 1 ){
			initialize('map-canvas-contact');
		}
		
		/* - Directory Map */
		if( $('#directory-map').length == 1 ){
			initialize('directory-map');
		}
		
		/* - Feature Details */
		if( $('#feature-detail').length == 1 ){
			initialize('feature-detail');
		}
		
		/* Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();
		  
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {

					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");					
						$("#input_name").val("");						
						$("#input_email").val("");
						$("#input_phone").val("");
						$("#input_subject").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();				
					}				
				},
				error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
				}
			});
			return false;
		});
		
		/* -- Keyword Section */
		var $document = $(document);
        var selector = '[data-rangeslider]';
        var $element = $(selector);
        // For ie8 support
        var textContent = ('textContent' in document) ? 'textContent' : 'innerText';
        // Example functionality to demonstrate a value feedback
        function valueOutput(element) {
            var value = element.value;
            var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
            output[textContent] = value;
			$("output").css("left",value+"%");
        }
        $document.on('input', 'input[type="range"], ' + selector, function(e) {
            valueOutput(e.target);
        });
        // Basic rangeslider initialization
        $element.rangeslider({
            polyfill: false,
            // Callback function
            onInit: function() {
                valueOutput(this.$element[0]);
            }           
        });
		
		/* - Lightbox for Portfolio Images */
		if( $(".gallery").length ){
			$(".gallery").magnificPopup({
				delegate: "a",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',				
				}
			});
		}
	});

	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {
		
		/* -- Directory Category */
		if( $(".directory-grid").length ) {

			var $container = $("#directory-grid-listing");
			
			$container.isotope({
				itemSelector: '.grid-box',
				gutter: 0,
				transitionDuration: "0.5s"
			});
				
			$("#filters a").on("click",function(){
				$("#filters a").removeClass("active");
				$(this).addClass("active");
				var selector = $(this).attr("data-filter");
				$container.isotope({ filter: selector });		
				return false;
			});
		}

		/* - Site Loader */
		if ( !$('html').is('.ie6, .ie7, .ie8') ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css('display','none');
		}
	});

})(jQuery);