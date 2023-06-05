import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
  // 属性和事件对象的前缀必须一致
  @Input() master2child!:string;
  @Output() master2childChange = new EventEmitter();

  onInput(e:any){
    this.master2childChange.emit(e.target.value)
    // 注意，此处只能有一个参数，如果想要传多个参，只能用[]/{}来进行传递
  }
}
