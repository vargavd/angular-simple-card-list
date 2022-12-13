import { Directive, ElementRef, HostBinding, HostListener, DoCheck } from '@angular/core';

@Directive({
  selector: '[appCardHoverEffets]'
})
export class CardHoverEffetsDirective {
  // element styles
  @HostBinding('style.boxShadow') boxShadow: string;

  // define styles
  defaultBoxShadow = '0 0 0 rgba(0, 0, 0, 0.2)';
  highlightedBoxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

  // DOM events
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.boxShadow = this.highlightedBoxShadow;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.boxShadow = this.defaultBoxShadow;
  }

  constructor(private elementRef: ElementRef) {
    this.boxShadow = this.defaultBoxShadow;
  }
}
