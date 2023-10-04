import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListeAnzeigenComponent } from './todo-liste-anzeigen.component';

describe('TodoListeAnzeigenComponent', () => {
  let component: TodoListeAnzeigenComponent;
  let fixture: ComponentFixture<TodoListeAnzeigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListeAnzeigenComponent]
    });
    fixture = TestBed.createComponent(TodoListeAnzeigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
