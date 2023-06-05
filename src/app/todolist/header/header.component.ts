import { Component, EventEmitter, Output } from '@angular/core';
import {renderTemplateData} from '../type'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onChangeItem = new EventEmitter();
  input="";

  onEnter(e:any){
    // 表示一按回车，就提交表单的值(表单值为空时不提交)
    if(e.keyCode===13 && this.input.trim().length!==0){
      console.log(this.input);
      this.onChangeItem.emit(renderTemplateData(this.input))//子传父，交给父节点进行数据更新
      this.input="";// 清空输入
    }

  }
}
