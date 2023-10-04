import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-erfassen',
  templateUrl: './todo-erfassen.component.html',
  styleUrls: ['./todo-erfassen.component.css']
})
export class TodoErfassenComponent {
  neuesTodo: string = '';
  @Output() neuesTodoEvent = new EventEmitter<string>();

  addTodo() {
    if(this.neuesTodo.trim() !== '') {
      this.neuesTodoEvent.emit(this.neuesTodo.trim());
      this.neuesTodo = '';
    }
  }
}

