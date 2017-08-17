import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BeerService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('/api/good-beers')
      .map((response: Response) => response.json());
  }
}
