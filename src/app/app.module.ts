import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { NgifComponent } from './view/ngif/ngif.component';
import { NgswitchComponent } from './view/ngswitch/ngswitch.component';
import { NgbindComponent } from './view/ngbind/ngbind.component';
import { NgstyleclassComponent } from './view/ngstyleclass/ngstyleclass.component';
import { NgmodelComponent } from './view/ngmodel/ngmodel.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './view/ngfor/ngfor.component';

@NgModule({
  // 声明组件-管道符-指令
  declarations: [
    AppComponent,
    HomeComponent,
    NgifComponent,
    NgswitchComponent,
    NgbindComponent,
    NgstyleclassComponent,
    NgmodelComponent,
    NgforComponent
  ],
  // 模块-针对全局的
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,// 双向数据绑定：用于 导出模板驱动表单
  ],
  // 注入服务
  providers: [],
  // 框架
  bootstrap: [AppComponent]
})
export class AppModule { }
