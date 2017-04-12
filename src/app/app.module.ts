import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import * as Raven from 'raven-js';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';

Raven
  .config('https://6534c33cf64e443a833ebd994a4ac41e@sentry.io/157515')
  .install();

export class RavenErrorHandler extends IonicErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    super.handleError(err);
    Raven.captureException(err);
  }
}

import { MyApp } from './app.component';

import { DataService } from './data.service';

import { MainPage } from './main/main.component';
import { CategoryPage } from './category/category.component';
// import { IntroPage } from './intro/intro.component';
import { JokePage } from './joke/joke.component';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    CategoryPage,
    // IntroPage,
    JokePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    CategoryPage,
    // IntroPage,
    JokePage,
  ],
  providers: [
    DataService,
    { provide: ErrorHandler, useClass: RavenErrorHandler, },
  ]
})
export class AppModule { }
