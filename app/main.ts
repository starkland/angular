// Angular core
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';

// Components
import { AppComponent } from './components/app.component';

// Start the bootstrap
bootstrap(AppComponent, [HTTP_PROVIDERS]);