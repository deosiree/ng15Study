import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  list: any[] = [
    {
      name: "上衣",
      color: "red",
      price: 280
    },
    {
      name: "长裤",
      color: "blue",
      price: 520
    },
    {
      name: "帽子",
      color: "pink",
      price: 251
    },
  ]
}
