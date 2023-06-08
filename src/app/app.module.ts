import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyPipePipe } from './my-pipe.pipe';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyPipePipe,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
