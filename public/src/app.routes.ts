import { Routes }     from '@angular/router';
import { Home }       from './home';
import { Login }      from './login';
import { Signup }     from './signup';
import { Profile }    from './profile';
import { Gesture }    from './gesture';
import { Keyboard }   from './keyboard';
import { Voice }      from './voice';
import { AuthGuard }  from './common/auth.guard';

export const routes: Routes = [
  { path: 'login',    component: Login },
  { path: 'signup',   component: Signup },
  { path: 'gesture',  component: Gesture },
  { path: 'keyboard', component: Keyboard },
  { path: 'voice',    component: Voice },
  // { path: '',         component: Login },
  // { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: 'home',     component: Home },
  { path: 'profile',  component: Profile },
  { path: '**',       component: Login },
];
