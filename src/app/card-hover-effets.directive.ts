import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appCardHoverEffets]'
})
export class CardHoverEffetsDirective implements OnChanges {
  // element styles
  @HostBinding('style.boxShadow') boxShadow: string;
  @HostBinding('style.opacity') opacity: string;
  @HostBinding('style.transform') transform: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // states
  mouseOverCard: boolean = false;

  // states from outside
  @Input() mouseOverDeleteButton: boolean = false;
  @Input() mouseOverAddButton: boolean = false;

  // default styles
  defaultBoxShadow = '0 0 0 rgba(0, 0, 0, 0.2)';
  defaultOpacity = '1';
  defaultTransform = 'scale(1)';
  defaultBackgroundColor = 'white';
  
  // highlighted styles
  highlightedBoxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

  // over delete styles
  deleteOverOpacity = '0.6';
  deleteOverTransform = 'scale(0.96) rotateZ(0.5deg)';
  deleteOverBackgroundColor = 'rgba(255, 240, 240, 1)';

  // over add styles
  addOverTransform = 'scale(1.06) rotateZ(-0.5deg)';
  addOverBackgroundColor = 'rgba(240, 240, 255, 1)';

  // DOM events
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.mouseOverCard = true;

    this.setStyles();
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.mouseOverCard = false;

    this.setStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setStyles(changes);
  }

  setStyles(changes?: SimpleChanges) {
    // declare the styles which we will set
    let boxShadowToSet = this.defaultBoxShadow;
    let opacityToSet = this.defaultOpacity;
    let transformToSet = this.defaultTransform;
    let backgroundColorToSet = this.defaultBackgroundColor;

    // state: mouse over on card
    if (this.mouseOverCard) {
      boxShadowToSet = this.highlightedBoxShadow;
    }

    // state: mouse is over the delete button
    if (changes && changes['mouseOverDeleteButton']?.currentValue) {
      opacityToSet = this.deleteOverOpacity;
      transformToSet = this.deleteOverTransform;
      backgroundColorToSet =  this.deleteOverBackgroundColor;
    }

    // state: mouse is over the add button
    if (changes && changes['mouseOverAddButton']?.currentValue) {
      transformToSet = this.addOverTransform;
      backgroundColorToSet = this.addOverBackgroundColor;
    }

    // set the styles
    this.boxShadow = boxShadowToSet;
    this.opacity = opacityToSet;
    this.transform = transformToSet;
    this.backgroundColor = backgroundColorToSet;
  }

  constructor(private elementRef: ElementRef) {
    this.boxShadow = this.defaultBoxShadow;
    this.opacity = this.defaultOpacity;
    this.transform = this.defaultTransform;
    this.backgroundColor = this.defaultBackgroundColor;
  }
}


/** 
 * OLD solution, from 2022: it doesn't use ngOnChanges like the new solution above 
 * It uses Input properties with setters. This is a much cleaner solution, but now (2023.08.19) I wanted to try ngOnChanges.
 **/

// @Directive({
//   selector: '[appCardHoverEffets]'
// })
// export class CardHoverEffetsDirective {
//   // element styles
//   @HostBinding('style.boxShadow') boxShadow: string;
//   @HostBinding('style.opacity') opacity: string;
//   @HostBinding('style.transform') transform: string;
//   @HostBinding('style.backgroundColor') backgroundColor: string;

//   // states
//   _mouseOverCard: boolean = false;
//   _mouseOverDeleteButton: boolean = false;
//   _mouseOverAddButton: boolean = false;

//   // Input properties
//   @Input() set mouseOverDeleteButton(value: boolean) {
//     this._mouseOverDeleteButton = value;

//     this.setStyles();
//   };
//   @Input() set mouseOverAddButton(value: boolean) {
//     this._mouseOverAddButton = value;
    
//     this.setStyles();
//   };

//   // default styles
//   defaultBoxShadow = '0 0 0 rgba(0, 0, 0, 0.2)';
//   defaultOpacity = '1';
//   defaultTransform = 'scale(1)';
//   defaultBackgroundColor = 'white';
  
//   // highlighted styles
//   highlightedBoxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

//   // over delete styles
//   deleteOverOpacity = '0.6';
//   deleteOverTransform = 'scale(0.96) rotateZ(0.5deg)';
//   deleteOverBackgroundColor = 'rgba(255, 240, 240, 1)';

//   // over add styles
//   addOverTransform = 'scale(1.06) rotateZ(-0.5deg)';
//   addOverBackgroundColor = 'rgba(240, 240, 255, 1)';

//   // DOM events
//   @HostListener('mouseenter') mouseover(eventData: Event) {
//     this._mouseOverCard = true;

//     this.setStyles();
//   }
//   @HostListener('mouseleave') mouseleave(eventData: Event) {
//     this._mouseOverCard = false;
    
//     this.setStyles();
//   }

//   setStyles() {
//     // declare the styles which we will set
//     let boxShadowToSet = this.defaultBoxShadow;
//     let opacityToSet = this.defaultOpacity;
//     let transformToSet = this.defaultTransform;
//     let backgroundColorToSet = this.defaultBackgroundColor;

//     // state: mouse over on card
//     if (this._mouseOverCard) {
//       boxShadowToSet = this.highlightedBoxShadow;
//     }

//     // state: mouse is over the delete button
//     if (this._mouseOverDeleteButton) {
//       opacityToSet = this.deleteOverOpacity;
//       transformToSet = this.deleteOverTransform;
//       backgroundColorToSet =  this.deleteOverBackgroundColor;
//     }

//     // state: mouse is over the add button
//     if (this._mouseOverAddButton) {
//       transformToSet = this.addOverTransform;
//       backgroundColorToSet = this.addOverBackgroundColor;
//     }

//     // set the styles
//     this.boxShadow = boxShadowToSet;
//     this.opacity = opacityToSet;
//     this.transform = transformToSet;
//     this.backgroundColor = backgroundColorToSet;
//   }

//   constructor(private elementRef: ElementRef) {
//     this.boxShadow = this.defaultBoxShadow;
//     this.opacity = this.defaultOpacity;
//     this.transform = this.defaultTransform;
//     this.backgroundColor = this.defaultBackgroundColor;
//   }
// }
