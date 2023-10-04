import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoErfassenComponent } from './todo-erfassen.component';

describe('TodoErfassenComponent', () => {
  let component: TodoErfassenComponent;
  let fixture: ComponentFixture<TodoErfassenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoErfassenComponent]
    });
    fixture = TestBed.createComponent(TodoErfassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
