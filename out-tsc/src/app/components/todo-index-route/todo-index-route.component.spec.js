import { async, TestBed } from '@angular/core/testing';
import { TodoIndexRouteComponent } from './todo-index-route.component';
describe('TodoIndexRouteComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoIndexRouteComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TodoIndexRouteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=todo-index-route.component.spec.js.map