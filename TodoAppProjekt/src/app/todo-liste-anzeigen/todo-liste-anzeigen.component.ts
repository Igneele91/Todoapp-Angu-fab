import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-liste-anzeigen',
  templateUrl: './todo-liste-anzeigen.component.html',
  styleUrls: ['./todo-liste-anzeigen.component.css']
})
export class TodoListeAnzeigenComponent {
  @Input() todos: {name: string, todo: string}[] = [];
  @Output() deleteTodoEvent = new EventEmitter<number>();

  deleteTodo(index: number) {
    this.deleteTodoEvent.emit(index);
  }
}
