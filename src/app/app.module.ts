import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Config idiomas locales de la app
import localEs from '@angular/common/locales/es';
import localFrCa from '@angular/common/locales/fr-CA';
import localEnCa from '@angular/common/locales/en-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localEs );
registerLocaleData( localFrCa );
registerLocaleData( localEnCa );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
