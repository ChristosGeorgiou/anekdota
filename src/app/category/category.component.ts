import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';
import { Joke, Category } from '../models';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  public category: Category;
  public jokes: Array<Joke>;

  constructor(private app: App, public params: NavParams) {
    // userParams is an object we have in our nav-parameters
    console.log(this.params);

    this.category =
      {
        image: "http://lorempixel.com/56/56/sports/1/",
        title: "lorem category",
        count: Math.random(),
      }
  }
}