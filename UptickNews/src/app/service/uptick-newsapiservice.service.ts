import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UptickNewsapiserviceService {
  private apiKey = '2766ae98d4604867b2947c9ecbb6a7f3';
  private apiUrl = 'https://newsapi.org/v2';

  constructor(private _http: HttpClient) {}

  input = document.querySelector('.input');
  techapiurl = `${this.apiUrl}/top-headlines?country=us&category=technology&apiKey=${this.apiKey}`;

  newsapiurl = `${this.apiUrl}/top-headlines?country=us&apiKey=${this.apiKey}`;
  businessApiUrl = `${this.apiUrl}/top-headlines?country=us&category=business&apiKey=${this.apiKey}`;

  healthApiUrl = `${this.apiUrl}/top-headlines?country=us&category=health&apiKey=${this.apiKey}`;

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

  getEverything(query: string): Observable<any> {
    const url = `${this.apiUrl}/everything?q=${query}&apiKey=${this.apiKey}`;
    return this._http.get(url);
  }
}
