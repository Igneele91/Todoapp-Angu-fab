import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-liste-anzeigen',
  templateUrl: './todo-liste-anzeigen.component.html',
  styleUrls: ['./todo-liste-anzeigen.component.css'] // Auch hier, passe die CSS an deine Anforderungen an
})
export class TodoListeAnzeigenComponent {
  @Input() todos: {name: string, todo: string}[] = [];
  @Output() deleteTodoEvent = new EventEmitter<{name: string, todo: string}>();

  deleteTodo(todoItem: {name: string, todo: string}) {
    this.deleteTodoEvent.emit(todoItem);
  }
}
