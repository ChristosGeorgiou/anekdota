import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import *  as _ from 'lodash';

import { MainPage } from '../main/main.component';

@Component({
  selector: 'page-age-confirm',
  templateUrl: 'age-confirm.html'
})
export class AgeConfirmPage {

  mainPage: any = MainPage;

  constructor(
    private nav: Nav,
    private storage: Storage
  ) {
  }

  confirm(sett) {
    this.storage
      .set('ageConfirm', sett)
      .then((val) => {
        this.nav.setRoot(this.mainPage);
      });
  }

}
