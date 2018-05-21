import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { NgModule }       from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard }      from './common/auth.guard';
import { Home }           from './home';
import { Login }          from './login';
import { Signup }         from './signup';
import { Profile }        from './profile';
import { Gesture }        from './gesture';
import { Keyboard }       from './keyboard';
import { Voice }          from './voice';

import { Nav }            from './common/nav';
import { Header }         from './common/header';
import { Footer }         from './common/footer';
import { App }            from './app';

import { routes }         from './app.routes';

const config: SocketIoConfig = { url: 'http://localhost:8042', options: {} };
@NgModule({
  bootstrap: [App],
  declarations: [
    Home, Login, Signup, Profile, Gesture, Keyboard, Voice,
    Header, Footer, Nav,
    App
  ],
  imports: [
    HttpModule, BrowserModule, FormsModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    AuthGuard, ...AUTH_PROVIDERS
  ]
})
export class AppModule {}
