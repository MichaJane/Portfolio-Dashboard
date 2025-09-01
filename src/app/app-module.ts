import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
