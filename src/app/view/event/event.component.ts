import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  print(event:any, propo:number){
    console.log(event.target) // 得到当前触发按钮的元素它自身
    alert(propo)
    console.log(event.target.getBoundingClientRect()); // 获取元素本身信息的一个新方法
    
  }

  // 元素支持多个相同事件的绑定，举例如下：
  disable=false;
  setDisable(){
    this.disable=!this.disable
  }
}
