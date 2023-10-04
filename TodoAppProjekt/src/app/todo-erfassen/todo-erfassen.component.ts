import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-erfassen',
  templateUrl: './todo-erfassen.component.html',
  styleUrls: ['./todo-erfassen.component.css'] // Du kannst hier ggf. die CSS-Regeln aus deiner style.css einfügen
})
export class TodoErfassenComponent {
  name: string = '';
  todo: string = '';
  @Output() neuesTodoEvent = new EventEmitter<{name: string, todo: string}>();

  addTodo() {
    if(this.name.trim() !== '' && this.todo.trim() !== '') {
      this.neuesTodoEvent.emit({name: this.name.trim(), todo: this.todo.trim()});
      this.name = '';
      this.todo = '';
    }
  }
}
