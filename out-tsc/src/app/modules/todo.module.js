import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRouteComponent } from '../components';
import { TodoRoutingModule } from './todo-routing.module';
let TodoModule = class TodoModule {
};
TodoModule = __decorate([
    NgModule({
        declarations: [
            TodoRouteComponent
        ],
        imports: [
            CommonModule,
            TodoRoutingModule,
        ]
    })
], TodoModule);
export { TodoModule };
//# sourceMappingURL=todo.module.js.map