import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private input: ElementRef) {
    this.input.nativeElement.value = '你好'
    this.input.nativeElement.focus()
  }

}
