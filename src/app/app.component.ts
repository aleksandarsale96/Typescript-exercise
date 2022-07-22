import { Component } from '@angular/core';

//dekorator
@Component({
  //definisanje el. unutar koga ce biti umetnuta prezentacija komponente, gde se bude nasao el koji se definise tagovima <app-root> tu ce se pokazati
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
}
