import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.title = 'Todo List';
    }
    ngOnInit() {
        console.log('Tag');
        this.fetchData = this.todoService.getTodos(10);
        this.todos$ = this.todoService.todos$;
        this.todoService.todos$.subscribe((data) => {
            console.log('Subscribing...');
            console.log({ data });
        });
        console.log(this.todoService.getTodos_());
        //   console.log(this.fetchData);
        //  console.log(this.todoService.todos);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map