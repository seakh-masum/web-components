
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { defineCustomElements } from 'stencil-library/loader';


defineCustomElements(window);

platformBrowser()
  .bootstrapModule(AppModule, {})
  .catch((err) => console.error(err));
