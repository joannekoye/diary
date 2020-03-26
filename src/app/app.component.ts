import { Component } from '@angular/core';
import { Entry } from './entry'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entries: Entry[] = [
    new Entry('Flowers', 'I got flowers today', new Date(2020,3,14))
  ]
}
