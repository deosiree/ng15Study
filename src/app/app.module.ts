import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './view/parent/parent.component';
import { ChildComponent } from './view/child/child.component';
import { EventComponent } from './view/event/event.component';
import { AttrsComponent } from './view/attrs/attrs.component';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from './view/master/master.component';
import { ChildrenComponent } from './view/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    EventComponent,
    AttrsComponent,
    MasterComponent,
    ChildrenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
