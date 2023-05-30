import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
  nums = [100, 3, 4, 5]
  list=[
    {
      name:'北京'
    },
    {
      name:'天津'
    },
    {
      name:'河北'
    },
  ]
}
