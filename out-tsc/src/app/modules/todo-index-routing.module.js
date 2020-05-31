import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoIndexRouteComponent } from '../components';
const routes = [
    {
        path: '',
        component: TodoIndexRouteComponent,
    },
];
let TodoIndexRoutingModule = class TodoIndexRoutingModule {
};
TodoIndexRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TodoIndexRoutingModule);
export { TodoIndexRoutingModule };
//# sourceMappingURL=todo-index-routing.module.js.map