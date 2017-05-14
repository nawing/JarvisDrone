import { Component, OnInit }  		from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import { HttpInterceptor }  			from '../config/interceptor';
const template = require('./profile.html');
@Component({
	selector: 'profile',
	template: template,
	providers : [HttpInterceptor]
})
export class Profile implements OnInit {
	private profileObjects: any;
	private id: any;
  private sub: any;
  private blogs: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpInterceptor: HttpInterceptor) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

	private profileIndex() {
		let body = {
			id : this.id,
			functionName : 'profile.show'
		};
		let Api = {
			url 	: 'profile/show',
			body 	: body
		};
		this.httpInterceptor.callApiPost(Api.url, Api.body)
			.subscribe(
				res => {
					console.log(res);
					this.profileObjects = res
				},
				err => {

				});
	}

	private profileEdit() {
		let body = {
			id 						: this.id,
			functionName 	: 'profile.edit',
			name 					: this.profileObjects['name'],
			age 					: this.profileObjects['age'],
			photo 				: this.profileObjects['url'],
		};
		let Api = {
			url 	: 'profile/edit',
			body 	: body
		};
		this.httpInterceptor.callApiPost(Api.url, Api.body)
			.subscribe(
				res => {
					console.log(res);
					this.profileObjects = res
				},
				err => {

				});
	}
}
