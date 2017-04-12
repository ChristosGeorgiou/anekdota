import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';
import { Joke, Category } from '../models';

@Component({
  selector: 'page-joke',
  templateUrl: 'joke.html'
})
export class JokePage {
  public joke: Joke;

  constructor(private app: App, public params: NavParams) {
    this.joke = this.params.data;
  }
}