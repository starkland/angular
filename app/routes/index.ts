// Angular
import { RouteDefinition } from 'angular2/router';

// Components
import { HomeComponent } from '../components/home/component';
import { UserComponent } from '../components/user/component';
import { NotFoundComponent } from '../components/404/component';

export const RouteDefinitions: RouteDefinition[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/users/:username',
    name: 'User',
    component: UserComponent
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundComponent
  },

  {
    path: '/*path',
    redirectTo: ['NotFound']
  }
];