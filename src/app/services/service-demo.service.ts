import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {

  constructor(
    private http: HttpClient
  ) { }

  // 获取 demo.json 数据
  getDemo() {
    return this.http.get('assets/demo.json', {
      responseType: 'json',
      params: {}
    })
  }
}
