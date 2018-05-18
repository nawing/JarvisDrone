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
	private str = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpInterceptor: HttpInterceptor) {}

  ngOnInit() {
		var ajax = this.httpInterceptor;
		var recognition = new ( window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'])();
		recognition.lang = 'en-US';
		recognition.interimResults = false;
		recognition.maxAlternatives = 5;
		recognition.start();

		recognition.onstart = function() { $("#message").text('Say Something'); };

		recognition.onsoundstart = function() {
			$("#message").text('Listening');
		}

		recognition.onsoundend = function() {
			recognition.stop();
			setTimeout(function() { recognition.start() }, 1000);
		}

		recognition.onend = function() {
			$("#message").text('Sleeping, Press The Button To Wake Me Up');
		}

		recognition.onresult = function (event) {
			console.log(event.results[0][0].transcript)
			$("#message").text('Got It! Sir. You Said '+ event.results[0][0].transcript);
			if (event.results[0][0].transcript === 'bye') {
				$("#message").text('Bye Bye ^^');
				recognition.stop();
			} else {
				checkCommand(event.results[0][0].transcript);
			}
		};

		function checkCommand(data) {
		 	var commands = [ 'take off', 'start',
		 	'land', 'landing',
		 	'right', 'left',
		 	'forward', 'come', 'backward' ,
		 	'up', 'higher',
		 	'down', 'lower',
		 	'stop', 'hold' ];
		 	var result = '';
		 	for (let key in commands) {
			 	if(data.search(commands[key]) !== -1) {
	 			result = commands[key];
			 	}
		 	}
		 	if(result === '') {

		 	} else {
			 	makeCommand(result);
		 	}
		}

		function makeCommand(data) {
			if (data === 'take off' || data === 'start') {
				controlSubmit('takeOff');
			} else if (data === 'land' || data === 'landing') {
				controlSubmit('land');
			} else if (data === 'right') {
				controlSubmit('right');
			} else if (data === 'left') {
				controlSubmit('left');
			} else if (data === 'forward' || data === 'come') {
				controlSubmit('forward');
			} else if (data === 'backward') {
				controlSubmit('backward');
			} else if (data === 'up' 		|| data === 'higher') {
				controlSubmit('flyUp');
			} else if (data === 'down' 	|| data === 'lower') {
				controlSubmit('flyDown');
			} else if (data === 'stop' 	|| data === 'hold') {
				controlSubmit('hold');
			}
		}

		function controlSubmit(status) {
			let body = {}
			let Api = {
				url : status,
				body : body
			};
			ajax.callApiPost(Api.url, Api.body).subscribe(
				res => console.log(res),
				err => console.log(err));
			}
	}


	restartSpeech() {
		var recognition = new (window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'])();
		recognition.lang = 'en-US';
		recognition.interimResults = false;
		recognition.maxAlternatives = 5;
		recognition.start();
	}

  ngOnDestroy() { }

}
