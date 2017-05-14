import { Component, OnInit }  		from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import { HttpInterceptor }  			from '../config/interceptor';
const template = require('./voice.html');
@Component({
	selector: 'voice',
	template: template,
	providers : [HttpInterceptor]
})
export class Voice implements OnInit {
	private commands = [
		'take off', 'start', 'land',
		'right', 'left',
		'forward', 'backward' ,
		'up', 'higher', 'down', 'lower',
		'stop', 'hold' ];

	private str = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpInterceptor: HttpInterceptor) {}

  ngOnInit() {
		var recognition = new (
			window.SpeechRecognition ||
			window.webkitSpeechRecognition ||
			window.mozSpeechRecognition ||
			window.msSpeechRecognition)();

			recognition.lang = 'en-US';
			recognition.interimResults = false;
			recognition.maxAlternatives = 5;
			setInterval(recognition.start(), 5000);
			setInterval(this.checkCommand(), 5000);
			recognition.onresult = function (event) {
				if (event.results[0][0].transcript === 'bye') {
					console.log('stopping');
					recognition.stop();
				} else {
					console.log(event.results[0][0].transcript);
					localStorage.setItem('command', event.results[0][0].transcript);
				}
			};
	}

	checkCommand() {
		localStorage.getItem('command') === '' ||
		localStorage.getItem('command') === null ||
		localStorage.getItem('command') === undefined
		? this.str = localStorage.getItem('command') : this.str = 'Nothing';

		for (let key in this.commands) {
			if(this.str.search(this.commands[key]) !== -1) {
				this.makeCommand(this.commands[key]);
			}
		}
		localStorage.setItem('command', '');

	}

	makeCommand(word) {
		console.log(word);
	}

  ngOnDestroy() { }

}
