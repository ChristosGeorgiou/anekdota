import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Category, Joke } from '../models';
import { CategoryPage } from '../category/category.component';
import { JokePage } from '../joke/joke.component';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  public jokes: { [name: string]: Array<Joke> } = {};
  public categories: Array<Category>;
  public categoryPage: any;
  public jokePage: any;

  constructor(private app: App) {
    this.categoryPage = CategoryPage;
    this.jokePage = JokePage;
    this.categories = [
      {
        image: "http://lorempixel.com/56/56/sports/1/",
        title: "lorem category",
        count: 1,
      }
    ];

    this.jokes.latest = [
      {
        text: "Έχω μια περίεργη αισιοδοξία σήμερα. Θα δω ειδήσεις να μου περάσει...",
        points: 1,
        added: "2017-01-01",
        isNew: true,
      },
      {
        text: "Όταν μου λένε πως κάποιος είναι μισός Έλληνας μισός Σουηδός, φαντάζομαι έναν οδηγό που σταματάει για να περάσει πεζός ενώ ταυτόχρονα τον μουντζώνει...",
        points: 1,
        added: "2017-02-01",
      },
      {
        text: "Χθες λιποθύμησα στο κρεβάτι για καμιά δεκαριά ώρες. Μάτι θα ήτανε.",
        points: 1,
        added: "2017-03-01",
      },
    ]
  }
}
