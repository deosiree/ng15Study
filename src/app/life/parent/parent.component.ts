import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck {
  index: number = 0;
  setIndex() {
    this.index++
  }
  log(str: string): void {
    // console.log(this.index++, str)
    // console.log(str)
  }

  // 初始值或注入
  constructor() {
    this.log('constructor')
  }
  // 视图初始化前
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit')
  }
  // 视图检测完成了
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked')
  }
  // 投影初始前
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit')
  }
  // 投影检测完成了
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked')
  }
  // 事件，状态，修改都会触发
  ngDoCheck(): void {
    this.log('ngDoCheck')
  }
  // 完成了属性初始等初始完毕
  ngOnInit(): void {
    this.log('ngOnInit')
  }
}
