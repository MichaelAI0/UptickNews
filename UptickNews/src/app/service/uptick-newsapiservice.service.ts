import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
import { SearchComponent } from '../search/search.component';
@Injectable({
  providedIn: 'root',
})
export class UptickNewsapiserviceService {
  constructor(private _http: HttpClient) {}

  input = document.querySelector('.input');
  newsapiurl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=2766ae98d4604867b2947c9ecbb6a7f3';
  techapiurl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2766ae98d4604867b2947c9ecbb6a7f3';

  businessApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2766ae98d4604867b2947c9ecbb6a7f3';

  healthApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=2766ae98d4604867b2947c9ecbb6a7f3';

  everyThingApiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=2766ae98d4604867b2947c9ecbb6a7f3`;

  topHeading(): Observable<any> {
    return this._http.get(this.newsapiurl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techapiurl);
  }

  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }

  healthNews(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }
}
