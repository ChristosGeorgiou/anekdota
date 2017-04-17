import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import * as Raven from 'raven-js';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';
import { IonicStorageModule } from '@ionic/storage';

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
import { AgeConfirmPage } from './age-confirm/age-confirm.component';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    CategoryPage,
    // IntroPage,
    JokePage,
    AgeConfirmPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'πίσω',
      // iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      // tabsPlacement: 'bottom',
      // pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    CategoryPage,
    // IntroPage,
    JokePage,
    AgeConfirmPage,
  ],
  providers: [
    DataService,
    { provide: ErrorHandler, useClass: RavenErrorHandler, },
  ]
})
export class AppModule { }
