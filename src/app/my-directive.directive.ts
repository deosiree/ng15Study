import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor() {
    window.alert('使用了指令appMyDirective')
  }

}
