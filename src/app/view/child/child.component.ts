import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // 父传子
  // 1.使用@Input装饰器来接收父组件的属性
  // @Input() value!:string;

  // 2.使用别名来避免冲突（不可以两个都用，只有一个@Input能工作）
  @Input("value") myValue!:string;

  // 3.修改子组件不会污染父组件的值

  // 子传父
  // 1.声明一个事件对象，来接收父组件传递的事件(a.使用@Output装饰器定义一个变量接收;b.实例化EventEmitter类的函数)
  @Output() setValue = new EventEmitter();
  
  // 2.向父组件发送参数
  sentValue(event:any){
    this.setValue.emit(event.target.value);// c.向父组件发送使用该对象.emit(...arg[])
  }
}
