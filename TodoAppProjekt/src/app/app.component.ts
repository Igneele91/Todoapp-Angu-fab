import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: {name: string, todo: string}[] = [];

  addTodo(newTodo: {name: string, todo: string}) {
    this.todos.push(newTodo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
