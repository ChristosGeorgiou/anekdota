import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';
import { Joke, Category } from '../models';
import * as _ from "lodash";

import { DataService } from '../data.service';

@Component({
  selector: 'page-joke',
  templateUrl: 'joke.html'
})
export class JokePage {
  public joke: Joke;
  public hasNext: boolean = false;
  public hasPrevious: boolean = false;
  public nsfw: boolean = false;

  constructor(
    private app: App,
    public params: NavParams,
    private dataService: DataService
  ) {
    this.joke = this.params.data;

    this.calcButtons()
  }

  calcButtons() {

    let index = _.findIndex(this.dataService.jokes, (i) => {
      console.log(i)
      return i._id === this.joke._id
    })
    this.hasPrevious = (index != 0)
    this.hasNext = (index != this.dataService.jokes.length - 1)


    this.nsfw = _.findIndex(this.joke.tags, (i) => {
      return i == "ΠΡΟΣΤΥΧΟ"
    }) != -1;

  }

  previous() {

    let index = _.findIndex(this.dataService.jokes, (i) => {
      console.log(i)
      return i._id === this.joke._id
    })

    if (index === 0) {
      index = this.dataService.jokes.length
    }

    console.log(index)

    this.joke = this.dataService.jokes[index - 1];

    this.calcButtons()
  }

  next() {
    let index = _.findIndex(this.dataService.jokes, (i) => {
      console.log(i)
      return i._id === this.joke._id
    })

    if (index + 1 >= this.dataService.jokes.length) {
      index -= 1
    }

    console.log(index)

    this.joke = this.dataService.jokes[index + 1];
    this.calcButtons()
  }
}