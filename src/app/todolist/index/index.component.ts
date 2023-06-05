import { Component } from '@angular/core';
import { Template as T, Template, renderTemplateData } from '../type';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  // plans 计划中
  plans: Array<T> = [] // 类型限制

  // dones 已完成
  dones: Array<T> = [] // 类型限制

  // js函数重载：根据参数的不同做出不同的响应（子传父，父组件接收数据后进行的处理函数）
  onChangeItem({ id, value, edit, from, to }: T): any {
    console.log(id, value, edit, from, to);
    if (!from && !to) {
      // 从头部过来的数据，直接push到plans里
      return this.plans.push({
        id, value, edit
      })
    }

    switch (from) {
      // 从plans转入dones
      case 'plans': this.findAndChangeItem(id, this.plans, this.dones); break;

      // 从dones中删除
      default: this.dones.splice(this.dones.findIndex(item=>item.id===id),1);break;
    }
  }

  findAndChangeItem(id: number, from: Array<Template>, to: Array<Template>): any {
    let index = from.findIndex(item => item.id == id)
    if (index == -1)// 没找到
      return;

    let item: Template = from.splice(index, 1)[0]// 在plans数组中删除
    if (item) {
      to.push(item)// 插入到dones数组中
    }
  }

  // 清空所有
  clearAll() {
    this.plans = []
    this.dones = []
  }
}
