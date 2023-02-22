import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputOnlyNumber]'
})
export class InputOnlyNumberDirective {

  @Input() inputOnlyNumber: boolean;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('blur', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (['Delete', 'Backspace', 'Tab', 'Escape', 'Enter', 'NumLock', 'ArrowLeft', 'ArrowRight', 'End', 'Home', '.', ','].indexOf(e.key) !== -1 ||
      (e.key === 'a' && (e.ctrlKey || e.metaKey)) ||
      (e.key === 'c' && (e.ctrlKey || e.metaKey)) ||
      (e.key === 'v' && (e.ctrlKey || e.metaKey)) ||
      (e.key === 'x' && (e.ctrlKey || e.metaKey))) {
      return;
    }
    
    if ((e.shiftKey || ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','].indexOf(e.key) === -1)) {
      e.preventDefault();
    }

  }

}
