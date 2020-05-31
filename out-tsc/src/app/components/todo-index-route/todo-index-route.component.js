import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TodoIndexRouteComponent = class TodoIndexRouteComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ;
    ngOnInit() {
        //   this.fetchData = this.todoService.getTodos(20);
        //   this.todos$ = this.todoService.todos$;
        //   this.todoService.todos$.subscribe(data=>{
        //     console.log(data);
        //   });
        //   console.log(this.fetchData);
        //  console.log(this.todoService.todos);
    }
    onChange(id) {
        this.todoService.updateStatus(id);
    }
    deleteTodo(id) {
        this.todoService.removeTodo(id);
    }
};
TodoIndexRouteComponent = __decorate([
    Component({
        selector: 'app-todo-index-route',
        templateUrl: './todo-index-route.component.html',
        styleUrls: ['./todo-index-route.component.scss']
    })
], TodoIndexRouteComponent);
export { TodoIndexRouteComponent };
//# sourceMappingURL=todo-index-route.component.js.map