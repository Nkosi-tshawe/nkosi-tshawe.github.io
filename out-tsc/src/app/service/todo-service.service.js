import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
let TodoService = class TodoService {
    constructor(_http) {
        this._http = _http;
        this.subject = new BehaviorSubject([]);
        this.todos$ = this.subject.asObservable();
        this.url = environment.apiUrl;
        console.log(`Env url ${this.url}`);
    }
    getTodos(limit) {
        console.log('Calling a service...');
        return this._http.get(`${this.url}/todos?_limit=${limit}`)
            .pipe(map((data) => {
            //   this.todos = data.map((todo)=> {
            //   return this.transform(todo);
            // });
            this.todos = data;
            this.subject.next(this.todos);
            return true;
        }), catchError(err => {
            alert(err.message);
            return of(false);
        }));
    }
    getTodos_() {
        let limit = 10;
        return this._http.get(`${this.url}/todos?_limit=${limit}`);
    }
    getTodo(id) {
        return this._http.get(`${this.url}/todos/${id}`)
            .pipe(map((data) => {
            return this.transform(data);
        }));
    }
    transform(response) {
        return Object.assign(response, { dueDate: this.randomTimeStamp() });
    }
    ;
    randomTimeStamp() {
        let start = new Date(environment.startDate);
        let end = new Date(environment.endDate);
        var diff = end.getTime() - start.getTime();
        var new_diff = diff * Math.random();
        this.dueDate = new Date(start.getTime() + new_diff);
        return this.dueDate;
    }
    getDueDate() {
        return this.dueDate;
    }
    getUrl() {
        return this.url;
    }
    ;
    updateStatus(id) {
        const indx = this.todos.findIndex((todo) => {
            todo.id === id;
        });
        this.todos[indx].completed = !this.todos[indx].completed;
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => {
            return todo.id !== id;
        });
    }
    addTodo(todo) {
        this.todos = [...this.todos, todo];
        this.subject.next(this.todos);
    }
};
TodoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TodoService);
export { TodoService };
//# sourceMappingURL=todo-service.service.js.map