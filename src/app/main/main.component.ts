import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import *  as _ from 'lodash';

import { Category, Joke } from '../models';
import { CategoryPage } from '../category/category.component';
import { JokePage } from '../joke/joke.component';

import { DataService } from '../data.service';

import { AgeConfirmPage } from '../age-confirm/age-confirm.component';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage implements OnInit {
  public jokes: { [name: string]: Array<Joke> } = {};
  public categories: Array<Category>;
  public categoryPage: any;
  public jokePage: any;

  private showNaughty: boolean;
  private ageConfirmPage: any = AgeConfirmPage;

  constructor(
    private nav: Nav,
    private storage: Storage,
    public platform: Platform,
    private app: App,
    private dataService: DataService
  ) {
    this.categoryPage = CategoryPage;
    this.jokePage = JokePage;
    this.categories = [
      {
        image: "http://lorempixel.com/56/56/sports/1/",
        title: "lorem category",
        count: 1,
      }
    ];
  }

  public ngOnInit() {

    this.storage
      .get('ageConfirm')
      .then((val) => {
        if (!val) {
          this.nav.setRoot(this.ageConfirmPage);
        }
        this.showNaughty = (val == 'I_AM_ADULT')
        this.load()
          .then(() => {
            this.nav.push(JokePage, this.dataService.jokes[0]);
          });
      });
  }

  public load() {
    // console.debug("load messages")
    return this.dataService
      .sync()
      .then(() => {
        // console.log(this.dataService.jokes)
        this.jokes.latest = _
          .chain(this.dataService.jokes)
          .sortBy((i) => {
            //console.log(i)
            return i.date;
          })
          .take(5)
          .value();
        this.jokes.best = _
          .chain(this.dataService.jokes)
          .sortBy((i: Joke) => {
            return i.points;
          })
          .reverse()
          .take(3)
          .value();
        this.jokes.worst = _
          .chain(this.dataService.jokes)
          .sortBy((i: Joke) => {
            return i.points;
          })
          .take(3)
          .value();
      })
  }

  refresh(refresher) {
    this.load()
      .then(() => {
        refresher.complete()
      })
  }
}
