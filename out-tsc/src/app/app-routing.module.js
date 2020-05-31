import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    // {
    //   path:'',
    //   redirectTo: 'todo-list',
    //   pathMatch: 'full'
    // },
    {
        path: 'todo-list',
        loadChildren: () => import('./modules/todo-index.module').then(mod => mod.TodoIndexModule)
    },
    {
        path: 'todos:id',
        loadChildren: () => import('./modules/todo.module').then(mod => mod.TodoModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map