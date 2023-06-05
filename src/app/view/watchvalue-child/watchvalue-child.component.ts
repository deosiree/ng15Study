import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-watchvalue-child',
  templateUrl: './watchvalue-child.component.html',
  styleUrls: ['./watchvalue-child.component.scss']
})
export class WatchvalueChildComponent {
  @Input() count!: number;
  @Output() countChange = new EventEmitter()

  // 子组件修改数据
  setCount(){
    this.countChange.emit(this.count+1)
  }
}
