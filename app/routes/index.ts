// Angular
import { RouteDefinition } from 'angular2/router';

// Components
import { HomeComponent } from '../components/home/component';
import { UserComponent } from '../components/user/component';

export const RouteDefinitions: RouteDefinition[] = [
  {
    path: '/',
    name:'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/users/:username',
    name:'User',
    component: UserComponent
  }
];