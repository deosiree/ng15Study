import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Template } from '../type';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent {
  @Input() data!:Array<Template>
  @Output() onDelItem = new EventEmitter();

  // 删除
  onDel(item:Template,e:any){
    this.onDelItem.emit({...item,from:'dones'})//子传父，交给父节点进行删除
  }
}
