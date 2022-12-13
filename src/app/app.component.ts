import { Component } from '@angular/core';

import { Texts } from 'src/sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardInfos: { 
    mouseIsOverDelete: boolean,
    mouseIsOverAdd: boolean,
    text: string
  } [] = Texts.map(text => ({
    mouseIsOverDelete: false,
    mouseIsOverAdd: false,
    text
  }));

  // mouse events
  mouseenterDeleteButton(cardIndex: number) {
    if (cardIndex < 0 || cardIndex > this.cardInfos.length) {
      console.error(`cardIndex is out of boundary: ${cardIndex}`);
      return;
    }

    this.cardInfos[cardIndex].mouseIsOverDelete = true;
  }
  mouseleaveDeleteButton(cardIndex: number) {
    if (cardIndex < 0 || cardIndex > this.cardInfos.length) {
      console.error(`cardIndex is out of boundary: ${cardIndex}`);
      return;
    }

    this.cardInfos[cardIndex].mouseIsOverDelete = false;
  }
  mouseenterAddButton(cardIndex: number) {
    if (cardIndex < 0 || cardIndex > this.cardInfos.length) {
      console.error(`cardIndex is out of boundary: ${cardIndex}`);
      return;
    }

    this.cardInfos[cardIndex].mouseIsOverAdd = true;
  }
  mouseleaveAddButton(cardIndex: number) {
    if (cardIndex < 0 || cardIndex > this.cardInfos.length) {
      console.error(`cardIndex is out of boundary: ${cardIndex}`);
      return;
    }

    this.cardInfos[cardIndex].mouseIsOverAdd = false;
  }
}
