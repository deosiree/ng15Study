import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyleclass',
  templateUrl: './ngstyleclass.component.html',
  styleUrls: ['./ngstyleclass.component.scss']
})
export class NgstyleclassComponent {
  title='我是一个兵'
  flagClass=true
  count=0
  onclick_class(){
    this.flagClass=!this.flagClass
    this.count++
  }

  flagStyle=true
  red60={
    color:'red',
    background:'yellow',
    fontSize:'60px'
  }
  blue20={
    color:'blue',
    background:'yellow',
    fontSize:'20px'
  }
  objectStyle=this.red60
  onclick_style(){
    this.flagStyle=!this.flagStyle
    this.objectStyle=(this.objectStyle==this.red60?this.blue20:this.red60)
  }
}


