import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardHoverEffetsDirective } from './card-hover-effets.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardHoverEffetsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
