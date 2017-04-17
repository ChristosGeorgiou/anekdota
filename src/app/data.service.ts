import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import *  as _ from 'lodash';
import * as PouchDB from 'pouchdb';

import { Joke } from "./models";

@Injectable()
export class DataService {

  public _db: any = {};
  public remoteDB: any = {};
  public jokes: Array<Joke>;

  constructor(private http: Http) {
    // PouchDB.plugin(cordovaSqlitePlugin);
    this._db = new PouchDB('database2.db');//, { adapter: 'cordova-sqlite' });
    this.remoteDB = new PouchDB('http://couchdb.cgeosoft.com:5984/anekdota');
  }

  public sync() {
    return this._db
      .replicate
      .from(this.remoteDB)
      .then(() => {
        return this._db
          .allDocs({ include_docs: true })
          .then((data) => {
            this.jokes = _
              .chain(data.rows)
              .map((i: any) => {
                return i.doc;
              })
              .value();
          })
      })
  }
}
