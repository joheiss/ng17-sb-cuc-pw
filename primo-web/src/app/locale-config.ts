import { LOCALE_ID, Provider } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe, localeDeExtra);

export function provideLocaleConfig(): Provider[] {
  return [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    },
    {
      provide: DateAdapter,
      useClass: NativeDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
  ];
}
