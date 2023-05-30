import { Component } from '@angular/core';

@Component({
  selector: 'app-ngbind',
  templateUrl: './ngbind.component.html',
  styleUrls: ['./ngbind.component.scss']
})
export class NgbindComponent {
  value='我是一个内容'
  dom=`<mark>我是一个标记</mark>`
}
