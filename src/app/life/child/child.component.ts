import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log("我被销毁了，清除定时器或全局变量的");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['index'].currentValue
    );
    // previousValue
  }
  @Input() index: number = 100;

}
