import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoIndexRouteComponent, TodoComponent } from '../components';
import { TodoIndexRoutingModule } from './todo-index-routing.module';
let TodoIndexModule = class TodoIndexModule {
};
TodoIndexModule = __decorate([
    NgModule({
        declarations: [
            TodoIndexRouteComponent,
            TodoComponent
        ],
        imports: [
            CommonModule,
            TodoIndexRoutingModule,
        ]
    })
], TodoIndexModule);
export { TodoIndexModule };
//# sourceMappingURL=todo-index.module.js.map