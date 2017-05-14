import { Injectable  }      from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable } 			from 'rxjs/Observable';
import { contentHeaders }   from '../common/headers';
import { URLSearchParams }  from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpInterceptor {
  private baseUrl       = 'http://localhost:8042/api/';
  private device        = navigator.userAgent.toLowerCase();
  private formData;
  constructor (
    private http : Http,
    private router : Router
  ) {}

  public getLocation() {
    return navigator.geolocation.getCurrentPosition(
      pos => {
        localStorage.setItem('lat', pos.coords.latitude.toString());
        localStorage.setItem('lng', pos.coords.longitude.toString());
      },
      err => {
        return 'please turn on your location service';
      });
  }

  public parseBody(_body: any) {
    this.getLocation();
    this.formData = new URLSearchParams();
    let __body = {
        device        : this.device,
        lat           : localStorage.getItem('lat'),
        lng           : localStorage.getItem('lng'),
        // token         : localStorage.getItem('token')
    };
    for (let key in _body) {
      __body[key] = _body[key];
    }
    for (let key in __body) {
      this.formData.append(key, __body[key]);
    }
    return this.formData;
  }



  public callApiPost(url: string, _body: any) {
    let parsedBody = this.parseBody(_body);
    console.log(parsedBody);
    let finalUrl = '';
    finalUrl = this.baseUrl + '' + url;

    return this.http.post(finalUrl, parsedBody, { headers: contentHeaders })
      .map(response => {
        if (response.json().status === 'success') {
          console.log(response.json());
          responsiveVoice.speak(response.json().message);
          this.notify('success', response.json().message);
          return response.json();
        } else {
          this.handleError(response.json().message);
        }
      });
  }

  public handleError (error: Response | any) {
    this.notify('danger', error);
  }

  public notify(type, message) {
    $.notify({
        icon: 'ti-gift',
        message: message
      },{
          type: type,
          timer: 3000
      });
      // var textToSpeechJs = require("text-to-speech-js");
      // textToSpeechJs.talk(message);
  }

}
