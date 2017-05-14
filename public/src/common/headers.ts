import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
let token = localStorage.getItem('token');

contentHeaders.append('Accept',       'application/x-www-form-urlencoded');
contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
contentHeaders.append('Authorization', 'Bearer ' + token);
