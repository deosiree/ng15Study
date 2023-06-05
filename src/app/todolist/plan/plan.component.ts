import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Template, renderTemplateData } from '../type';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  @Input() data!:Array<Template>
  @Output() onChangeItem = new EventEmitter();

  // 删除
  onDel(item:Template,e:any){
    // 阻止冒泡
    e.stopPropagation()
    // 告诉父级把当前这一条数据插入，并且插入到dones的数组中
    this.onChangeItem.emit({...item,from:'plans',to:'dones'})

  }

  // 进入编辑状态的函数
  onSetEdit(item:Template){
    item.edit=!item.edit
  }

  // 确认编辑，退出编辑状态
  onEnter(item:Template ,e:any){
    // 表示一按回车，就提交表单的值(表单值为空时不提交)
    if(e.keyCode===13){
      this.onSetEdit(item)
    }

  }

}
