import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { HttpInterceptor }    from '../../config/interceptor';
import { AuthGuard } 					from './../auth.guard';

const template = require('./header.html');
@Component({
	selector: 'header-common',
	template: template,
	providers : [HttpInterceptor]
})
export class Header implements OnInit {
	private headerObjects: any;
	private authObject: any;
	constructor(
		private router: Router,
		private httpInterceptor: HttpInterceptor,
		private authGuard : AuthGuard
		) {}
		ngOnInit() {
			this.authObject = this.authGuard;
		};
		ngDestroy() {};
}
