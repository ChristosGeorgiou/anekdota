import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';

import { Category, Joke } from '../models';
import { CategoryPage } from '../category/category.component';
import { JokePage } from '../joke/joke.component';

import { DataService } from '../data.service';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage implements OnInit {
  public jokes: { [name: string]: Array<Joke> } = {};
  public categories: Array<Category>;
  public categoryPage: any;
  public jokePage: any;

  constructor(public platform: Platform, private app: App, private dataService: DataService) {
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
    this.dataService
      .jokes
      .subscribe((j) => {
        this.jokes.latest.push(j)
      })
    console.log(this.jokes)
  }
}
