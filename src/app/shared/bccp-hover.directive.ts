import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBccpHover]',
})
export class BccpHoverDirective {
  @Input() hoverFrom = 'mat-elevation-z0';
  @Input('appBccpHover') hoverTo = 'mat-elevation-z6';
  hoverState: any;
  @HostListener('mouseenter') onMouseEnter() {
    this.toggleHoverClass();
  }
  @HostListener('mouseenter') onMouseLeave() {
    this.toggleHoverClass();
  }
  constructor(private el: ElementRef) {}
  toggleHoverClass() {
    console.log('hover state', this.hoverFrom, '=>', this.hoverTo);
  }
}
