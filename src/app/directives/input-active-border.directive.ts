import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputActiveBorder]'
})
export class InputActiveBorderDirective {
  pBorder = 'blue 1px solid';
  constructor() { }
  @HostBinding('style.border') border: string;
  @HostListener('change') newBorder() {
    this.border = this.pBorder;
  }
}
