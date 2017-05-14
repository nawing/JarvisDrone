import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { HttpInterceptor }    from '../../config/interceptor';
import { AuthGuard } 					from './../auth.guard';

const template = require('./nav.html');
@Component({
	selector: 'nav-common',
	template: template,
	providers : [HttpInterceptor]
})
export class Nav implements OnInit {
	private navObjects: Object = {
		name : '',
		token : ''
	}
	private authObject: any;
	constructor(
		private router: Router,
		private httpInterceptor: HttpInterceptor,
		private authGuard : AuthGuard
		) {}
		ngOnInit() {
			this.authObject = this.authGuard;
			this.navObjects['name'] = localStorage.getItem('name');
		};
		ngDestroy() {};
}
