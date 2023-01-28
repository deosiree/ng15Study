import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective {

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) {
  }

  @Input()
  set appMyif(state: boolean) {
    if (state) {
      this.viewRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewRef.clear()
    }
  }

}
