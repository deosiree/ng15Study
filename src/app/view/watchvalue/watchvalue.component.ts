import { Component } from '@angular/core';

@Component({
  selector: 'app-watchvalue',
  templateUrl: './watchvalue.component.html',
  styleUrls: ['./watchvalue.component.scss']
})
export class WatchvalueComponent {
  // 父组件如何监听子组件修改值的变化
  // count === 5 ? 提示

  _count = 1//下划线_为前缀的变量名表示该属性是私有的，不对外使用的(代码规范)
  // 监听count的变化
  get count(){
    return this._count
  }
  set count(v:number){
    this._count = v
    // 对值的改变做监听
    console.log(v)
    if(v >=5){
      alert('今日访问次数已达上限')
    }
  }
}
