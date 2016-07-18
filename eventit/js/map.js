// *
// * Add multiple markers
// * 2013 - en.marnoto.com
// *

// necessary variables
var map;
var infoWindow;
var mapid = document.getElementById('grid-map').value;
// markersData variable stores the information necessary to each marker
if( mapid == "directory" ) {
	var markersData = [
		{ 
			lat: -35.282000,
			lng: 149.128684,
			name: "1",
			address:"canberra",
			phone: "2600 Australia",
			image: "images/feature/help-marker.png" // don't insert comma in the last item of each marker
		},
		{
			lat: -35.279609,
			lng: 149.128684,
			name: "2",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/market-marker.png"	  // don't insert comma in the last item of each marker
		},
		{
			lat: -35.279381,
			lng: 149.125489,
			name: "3",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/education-marker.png"	  // don't insert comma in the last item of each marker
		},
		{
			lat: -35.281063,
			lng: 149.126540,
			name: "4",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/airport-marker.png"	  // don't insert comma in the last item of each marker
		},
		{
			lat: -35.278172,
			lng: 149.134136,
			name: "5",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/travels-marker.png"	  // don't insert comma in the last item of each marker
		},
		{
			lat: -35.280117,
			lng: 149.133064,
			name: "6",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/banking-marker.png"	  // don't insert comma in the last item of each marker
		},
		{
			lat: -35.276578,
			lng: 149.136239,
			name: "7",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/market2-marker.png"	  // don't insert comma in the last item of each marker
		},
		{
			lat: -35.276473,
			lng: 149.130124,
			name: "8",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/restaurant-marker.png"	  // don't insert comma in the last item of each marker
		},
		{
			lat: -35.278891,
			lng: 149.135123,
			name: "9",
			address:"canberra",
			phone: "2600	Australia",
			image: "images/feature/medical-marker.png"	  // don't insert comma in the last item of each marker
		}
	];
}
else {
	var markersData = [
		{ 
			lat: -37.754023,
			lng: 144.890025,
			name: "Food",
			address:"Portobello Pizza",
			phone: "+1(888)153-9876",
			image: "images/banner/banner-marker1.png",
			bgimage: '<img src="images/banner/address-img.jpg" />' // don't insert comma in the last item of each marker
		},
		{
			lat: -37.744023,
			lng: 144.888006,
			name: "Restaurant",
			address:"Portobello Pizza",
			phone: "+1(888)153-9876",
			image: "images/banner/banner-marker2.png",
			bgimage: '<img src="images/banner/address-img.jpg" />' // don't insert comma in the last item of each marker
		},
		{
			lat: -37.756975,
			lng: 144.878876,
			name: "Bank",
			address:"Portobello Pizza",
			phone: "+1(888)153-9876",
			image: "images/banner/banner-marker3.png",
			bgimage: '<img src="images/banner/address-img.jpg" />' // don't insert comma in the last item of each marker
		},
		{
			lat: -37.750324,
			lng: 144.884584,
			name: "Education",
			address:"Portobello Pizza",
			phone: "+1(888)153-9876",
			image: "images/banner/banner-marker4.png",
			bgimage: '<img src="images/banner/address-img.jpg" />' // don't insert comma in the last item of each marker
		},
		{
			lat: -37.749306,
			lng: 144.896300,
			name: "Airport",
			address:"Portobello Pizza",
			phone: "+1(888)153-9876",
			image: "images/banner/banner-marker5.png",
			bgimage: '<img src="images/banner/address-img.jpg" />' // don't insert comma in the last item of each marker
		},
		{
			lat: -37.751138,
			lng: 144.903896,
			name: "Market",
			address:"Portobello Pizza",
			phone: "+1(888)153-9876",
			image: "images/banner/banner-marker6.png",
			bgimage: '<img src="images/banner/address-img.jpg" />' // don't insert comma in the last item of each marker
		},
		{
			lat: -37.755685,
			lng: 144.901450,
			name: "Medical",
			address:"Portobello Pizza",
			phone: "+1(888)153-9876",
			image: "images/banner/banner-marker7.png",
			bgimage: '<img src="images/banner/address-img.jpg" />' // don't insert comma in the last item of each marker
		}
	];
}


function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(40.601203,-8.668173),
		zoom: 10,
		mapTypeId: 'roadmap',				scrollwheel: false
	};
	
	if( mapid == "directory" ) {
		map = new google.maps.Map(document.getElementById('directory-map'), mapOptions);
		//alert("true");
	}
	else {
		map = new google.maps.Map(document.getElementById('directory'), mapOptions);
		//alert("false");
	}
	
	//map = new google.maps.Map(document.getElementById('directory-map'), mapOptions);

	// a new Info Window is created
	infoWindow = new google.maps.InfoWindow();

	// Event that closes the Info Window with a click on the map
	google.maps.event.addListener(map, 'click', function() {
		infoWindow.close();
	});

	// Finally displayMarkers() function is called to begin the markers creation
	displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);

// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

	// this variable sets the map bounds according to markers position
	var bounds = new google.maps.LatLngBounds();
   
	// for loop traverses markersData array calling createMarker function for each marker 
	if( mapid == "directory" ) {
		for (var i = 0; i < markersData.length; i++){
			var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
			var name = markersData[i].name;
			var address = markersData[i].address;
			var phone = markersData[i].phone;
			var image = markersData[i].image;
			createMarker(latlng, name, address, phone, image);
			// marker position is added to bounds variable
			bounds.extend(latlng);  
		}
	}else {
		for (var i = 0; i < markersData.length; i++){
			var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
			var name = markersData[i].name;
			var address = markersData[i].address;
			var phone = markersData[i].phone;
			var image = markersData[i].image;
			var bgimage = markersData[i].bgimage;
			createMarker(latlng, name, address, phone, image, bgimage);
			// marker position is added to bounds variable
			bounds.extend(latlng);  
		}
	}


   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
// Creating the content to be inserted in the infowindow
if( mapid == "directory" ) {
	function createMarker(latlng, name, address, phone, image){
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			title: name,
			icon: image
		});

		// This event expects a click on a marker
		// When this event is fired the Info Window content is created
		// and the Info Window is opened.
		google.maps.event.addListener(marker, 'click', function() {
			var iwContent = '<div id="iw_container">' + '<div class="iw_title">' + name + '</div>' + '<div class="iw_content">' + address + '<br />' + phone + '</div></div>';
			// including content to the Info Window.
			infoWindow.setContent(iwContent);
			// opening the Info Window in the current map and at the current marker location.
			infoWindow.open(map, marker);
		});
	}
}
else {
	function createMarker(latlng, name, address, phone, image, bgimage) {
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			title: name,
			icon: image
		});

		// This event expects a click on a marker
		// When this event is fired the Info Window content is created
		// and the Info Window is opened.
		google.maps.event.addListener(marker, 'click', function() {
			var iwContent = '<div id="iw_container">' + bgimage + '<div class="iw_content">' + '<div class="iw_title">' + name 	+ '</div>' + '<div class="iw_address">' + address + '<p>' + phone + '</p></div></div></div>';
			// including content to the Info Window.
			infoWindow.setContent(iwContent);
			// opening the Info Window in the current map and at the current marker location.
			infoWindow.open(map, marker);
	   });
	}
}