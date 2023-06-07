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
import { WatchvalueComponent } from './view/watchvalue/watchvalue.component';
import { WatchvalueChildComponent } from './view/watchvalue-child/watchvalue-child.component';
import { PlanComponent } from './todolist/plan/plan.component';
import { DoneComponent } from './todolist/done/done.component';
import { HeaderComponent } from './todolist/header/header.component';
import { IndexComponent } from './todolist/index/index.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    EventComponent,
    AttrsComponent,
    MasterComponent,
    ChildrenComponent,
    WatchvalueComponent,
    WatchvalueChildComponent,
    PlanComponent,
    DoneComponent,
    HeaderComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
