import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todosListe: string[] = [];

  addToTodos(neuesTodo: string) {
    this.todosListe.push(neuesTodo);
  }
}
