import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideLocaleConfig } from './locale-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLocaleConfig(),
    provideRouter(routes),
    provideAnimationsAsync()]
};
