import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*

/*
  Generated class for the BebidaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BebidaProvider {

  constructor(public http: Http) {    
  }

  getDrinks() {
    return this.http.get('http://caffeesalem.hol.es/index.php/api/bebidas/getAll')
    .map(res => res.json())
    .toPromise();
  }
}
