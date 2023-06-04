import { Component } from '@angular/core';

@Component({
  selector: 'app-attrs',
  templateUrl: './attrs.component.html',
  styleUrls: ['./attrs.component.scss']
})
export class AttrsComponent {
  disable=false;
  setDisable(){
    this.disable=!this.disable
  }

  showBox(e:any){
    console.log(e.target.dataset);
  }
}
