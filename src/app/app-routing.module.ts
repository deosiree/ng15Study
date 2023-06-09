import { NgModule } from '@angular/core';
// 引入路由模块 RouterModule和 Routes
import { RouterModule, Routes } from '@angular/router';
// 引入在不同URL下，需要展示的组件
import { AboutComponent } from './baserouter/about/about.component';
import { HomeComponent } from './baserouter/home/home.component';

// 配置的路由数组
const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  // forRoot() 方法会创建一个 NgModule，其中包含所有指令、给定的路由以及 Router 服务本身。
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
