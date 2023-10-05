import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flowers = Array(8).fill(null);

  toggleSun() {
    // Diese Funktion könnte genutzt werden, um das Bild der Sonne zu wechseln,
    // aber da wir das bereits in der SunComponent machen, bleibt sie hier leer.
  }
}
