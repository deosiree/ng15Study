import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // 父传子
  // 父组件传递给子组件数据
  parentValue=""

  // 子传父
  // 父组件接收子组件传递的数据
  getSon(value:string){
    this.parentValue=value
  }
}
