import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { HttpInterceptor } from '../config/interceptor';
const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
  providers: [HttpInterceptor]
})
export class Home {
  constructor(
    public router: Router,
    public http: Http,
    public httpInterceptor: HttpInterceptor
  ) {}

  private controlSubmit(status) {
    let body = {}
    let Api = {
      url : status,
      body : body
    };
    this.httpInterceptor.callApiPost(Api.url, Api.body)
      .subscribe(
        res => {

        },
        err => {

        });
  }
}
