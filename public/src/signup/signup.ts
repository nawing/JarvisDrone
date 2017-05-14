import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { Http }             from '@angular/http';
import { contentHeaders }   from '../common/headers';
import { HttpInterceptor }  from '../config/interceptor';

const template = require('./signup.html');

@Component({
  selector: 'signup',
  template: template,
  providers: [HttpInterceptor]
})
export class Signup {
  private user:Object = {};
  constructor(
    private router: Router,
    private http: Http,
    private httpInterceptor : HttpInterceptor) {
  }

  private signup() {
    let body = this.user;
    let Api = {
      url : 'signup',
      body : body
    };
    this.httpInterceptor.callApiPost(Api.url, Api.body)
      .subscribe(
        res => {
          if(res['status'] === 'success') {
            this.router.navigate(['/login']);
          }
          console.log(res)
        },
        err => {

        });
  }

}
