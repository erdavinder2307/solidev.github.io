import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

if (environment.production && location.protocol !== 'https:') {
  if(window.location.hostname.indexOf("www")<0)
  {
    location.href = 'https://www.' + window.location.href.substring(window.location.protocol.length+2);
  }
  else
  {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
