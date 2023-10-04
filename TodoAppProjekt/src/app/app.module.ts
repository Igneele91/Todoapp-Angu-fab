import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Neu importiert

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoErfassenComponent } from './todo-erfassen/todo-erfassen.component';
import { TodoListeAnzeigenComponent } from './todo-liste-anzeigen/todo-liste-anzeigen.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoErfassenComponent,
    TodoListeAnzeigenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Hier hinzugefügt
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
