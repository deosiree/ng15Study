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
  constructor() {
    this.log('constructor')
  }
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked')
  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked')
  }
  ngDoCheck(): void {
    this.log('ngDoCheck')
  }
  ngOnInit(): void {
    this.log('ngOnInit')
  }
}
