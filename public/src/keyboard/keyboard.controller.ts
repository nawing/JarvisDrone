import { Component, OnInit }  		from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import { HttpInterceptor }  			from '../config/interceptor';
const template = require('./keyboard.html');
@Component({
	selector: 'keyboard',
	template: template,
	providers : [HttpInterceptor]
})
export class Keyboard implements OnInit {
	private keyboardObjects: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpInterceptor: HttpInterceptor) {}

  ngOnInit() { }
  ngOnDestroy() { }
}
