import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FocusDirective } from './directive/focus.directive';
import { FocusComponent } from './view/focus/focus.component';
import { ConfigDomDirective } from './directive/config-dom.directive';
import { ConfigDomComponent } from './view/config-dom/config-dom.component';
import { MyifDirective } from './directive/myif.directive';
import { MyifComponent } from './view/myif/myif.component';
import { ReversePipe } from './pipe/reverse.pipe';
import { PipereverseComponent } from './view/pipereverse/pipereverse.component';

@NgModule({
  // 组件，指令，管道
  declarations: [
    AppComponent,
    FocusDirective,
    FocusComponent,
    ConfigDomDirective,
    ConfigDomComponent,
    MyifDirective,
    MyifComponent,
    ReversePipe,
    PipereverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
