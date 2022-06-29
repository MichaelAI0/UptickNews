import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UptickNewsapiserviceService {
  constructor(private _http: HttpClient) {}
  newsapiurl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=2766ae98d4604867b2947c9ecbb6a7f3';

  topHeading(): Observable<any> {
    return this._http.get(this.newsapiurl);
  }
}
