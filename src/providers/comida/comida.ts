import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ComidaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComidaProvider {

  constructor(public http: Http) {    
  }

  getFood() {
    return this.http.get('http://caffeesalem.hol.es/index.php/api/comida/getAll')
    .map(res => res.json())
    .toPromise();
  }
}
