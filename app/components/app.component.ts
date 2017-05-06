//
// Arquivo que contém o componente <my-app>
// com um template básico
//

// Angular Core
import { Component, Input } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

// Routes
import { RouteDefinitions } from '../routes/index';

// Services
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/index.html',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    UserService,
    HTTP_PROVIDERS
  ]
})
@RouteConfig(RouteDefinitions)

export class AppComponent {

  private id:number;
  private nome, email: string;

  constructor(private _service: UserService) {}
}