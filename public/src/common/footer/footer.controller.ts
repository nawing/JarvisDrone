import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { HttpInterceptor }    from '../../config/interceptor';
const template = require('./footer.html');
@Component({
	selector: 'footer-common',
	template: template,
	providers : [HttpInterceptor]
})
export class Footer implements OnInit {
	private footerObjects: any;
	constructor(
		private router: Router,
		private httpInterceptor: HttpInterceptor
		) {}
		ngOnInit() {};
		ngDestroy() {};
}
