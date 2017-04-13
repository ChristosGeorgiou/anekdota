import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

@Injectable()
export class DataService {
  public db: any = {};
  constructor(private http: Http) { }

  initDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this.db = new PouchDB('database.db');//, { adapter: 'cordova-sqlite' });
    var remoteDB = new PouchDB('http://192.168.1.200:5984/anekdota');
    this.db.replicate.from(remoteDB);
  }
}
