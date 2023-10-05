import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-erfassen',
  templateUrl: './todo-erfassen.component.html',
  styleUrls: ['./todo-erfassen.component.css']
})
export class TodoErfassenComponent {
  neuesTodo: string = '';
  name: string = '';
  @Output() neuesTodoEvent = new EventEmitter<{name: string, todo: string}>();

  addTodo() {
    if (this.neuesTodo.trim() !== '' && this.name.trim() !== '') {
      this.neuesTodoEvent.emit({name: this.name.trim(), todo: this.neuesTodo.trim()});
      this.neuesTodo = '';
      this.name = '';
    }
  }
}
