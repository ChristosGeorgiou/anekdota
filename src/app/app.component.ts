import { Component, ViewChild, enableProdMode } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import * as Raven from 'raven-js';

import { MainPage } from './main/main.component';
import { DataService } from './data.service';

//enableProdMode();

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  constructor(public platform: Platform, public dataService: DataService) {
    this.platform
      .ready()
      .then(() => {
        this.dataService.init();
        Raven.setRelease("0.0.0");
      });
  }

}