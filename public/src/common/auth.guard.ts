import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (tokenNotExpired()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  isLoggedIn() {
    if(
      localStorage.getItem('token') !== undefined ||
      localStorage.getItem('token') !== '' ||
      localStorage.getItem('token') !== null
    ) {
      return true;
    }
      return false;
  }
}
