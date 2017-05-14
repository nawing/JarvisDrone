import { Component, OnInit }  		from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import { HttpInterceptor }  			from '../config/interceptor';
const template = require('./gesture.html');
@Component({
	selector: 'gesture',
	template: template,
	providers : [HttpInterceptor]
})
export class Gesture implements OnInit {
	private gestureObjects: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpInterceptor: HttpInterceptor) {}

  ngOnInit() { }
  ngOnDestroy() { }
}
