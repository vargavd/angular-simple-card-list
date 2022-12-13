import { Component } from '@angular/core';

import { Texts } from 'src/sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texts: string[] = Texts;
}
