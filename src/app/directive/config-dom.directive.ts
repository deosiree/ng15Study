import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
let Params = {
  bg: 'red', color: '#fff', content: 'null'
}
type PARAMS = {
  bg?: string, color?: string, content?: string
}
@Directive({
  selector: '[appConfigDom]'
})
export class ConfigDomDirective implements AfterViewInit {
  @Input('appConfigDom') params: PARAMS | any = Params;
  /* 
   1. 获取指令传递过来的数据，来改变元素的样式
   2. 监听用户的交互行为，响应不同的元素样式
  */
  get El() {
    return this.el.nativeElement;
  }

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    var { bg, color, content } = this.params
    this.El.style.height = '100px'
    this.El.style.background = bg
    this.El.style.color = color
    this.El.innerText = content
    console.log(bg, color,);

  }

  @HostListener("mouseenter") mouseenter() {
    var { bg, color } = this.params
    this.El.style.background = color
    this.El.style.color = bg
  }

  @HostListener("mouseleave") mouseleave() {
    var { bg, color } = this.params
    this.El.style.background = bg
    this.El.style.color = color
  }
}
