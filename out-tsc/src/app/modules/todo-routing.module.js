import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoRouteComponent } from '../components';
const routes = [
    {
        path: '',
        component: TodoRouteComponent,
    },
];
let TodoRoutingModule = class TodoRoutingModule {
};
TodoRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TodoRoutingModule);
export { TodoRoutingModule };
//# sourceMappingURL=todo-routing.module.js.map