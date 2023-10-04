import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todosListe: {name: string, todo: string}[] = [];

  addToTodos(neuesTodo: {name: string, todo: string}) {
    this.todosListe.push(neuesTodo);
  }

  deleteFromTodos(todoToDelete: {name: string, todo: string}) {
    const index = this.todosListe.findIndex(
      todo => todo.name === todoToDelete.name && todo.todo === todoToDelete.todo
    );
    if (index > -1) {
      this.todosListe.splice(index, 1);
    }
  }
}
