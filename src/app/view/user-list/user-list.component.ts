import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from 'src/app/services/service-demo.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public name:string = '';

  constructor(
    private demoService: ServiceDemoService
  ) { }

  ngOnInit(): void {
    this.demoService.getDemo().subscribe({
      next: (data: any) => {
        this.name = data.name
      },
      error: () => {}
    })
  }

}
