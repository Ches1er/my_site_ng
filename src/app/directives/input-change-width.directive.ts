import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputChangeWidth]'
})
export class InputChangeWidthDirective {
  pWidth =  150;
  constructor() { }
  @HostBinding('style.width') width: string;
  @HostListener('keypress') newWidth() {
    const newWidth = this.pWidth + 5;
    this.width = newWidth + 5 + 'px';
    this.pWidth = newWidth;
  }
}
