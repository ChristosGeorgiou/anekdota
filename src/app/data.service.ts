import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import * as PouchDB from 'pouchdb';

import { Joke } from "./models";

@Injectable()
export class DataService {

  public _db: any = {};
  public jokes: Observable<Joke> = new Observable(null);

  constructor(private http: Http) { }

  public init() {
    // PouchDB.plugin(cordovaSqlitePlugin);
    this._db = new PouchDB('database2.db');//, { adapter: 'cordova-sqlite' });

    setTimeout(() => {
      this.sync();
    })

    this.sync();
  }

  public sync() {
    var remoteDB = new PouchDB('http://couchdb.cgeosoft.com:5984/anekdota');
    return this._db
      .replicate
      .from(remoteDB)
      .then(() => {
        this._db
          .allDocs({ include_docs: true })
          .then((docs) => {
            this.jokes = docs.map(j => j.doc);
          })
      })
  }
}
