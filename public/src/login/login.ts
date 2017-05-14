import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { Http }             from '@angular/http';
import { contentHeaders }   from '../common/headers';
import { HttpInterceptor }  from '../config/interceptor';

const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  providers: [HttpInterceptor]
})
export class Login {
  private user: Object = {};
  constructor(
    private router: Router,
    private http: Http,
    private httpInterceptor : HttpInterceptor) {}

    private login() {
      let body = this.user;
      let Api = {
        url : 'login',
        body : body
      };
      this.httpInterceptor.callApiPost(Api.url, Api.body)
        .subscribe(
          res => {
            if(res['status'] === 'success') {
              localStorage.setItem('token', res['data']['token']);
              localStorage.setItem('name',  res['data']['name']);
              this.router.navigate(['/home']);
            }
          });
    }
}
