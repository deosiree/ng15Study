import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-getdom',
  templateUrl: './getdom.component.html',
  styleUrls: ['./getdom.component.css']
})
export class GetdomComponent implements AfterViewInit {
  // 01 标签上使用模板变量绑定名称，然后使用ViewChild装饰器来获取
  @ViewChild("h1") title?: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.title?.nativeElement.innerText);
    console.log("------------------------------")
    console.log(this.el.nativeElement.querySelector('div').innerText);
    console.log("------------------------------------")
    console.log(this.mya.alert());
  }
  // 02 使用ElementRef注入到我们的组件中来任意获取标签
  constructor(private el: ElementRef) { }
  // 03 获取自定义组件实例对象
  @ViewChild("mya") mya?: any;
}
