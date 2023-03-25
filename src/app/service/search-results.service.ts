import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  private querySubject = new BehaviorSubject<string>('');
  results: any[] = [];

  constructor() {
    console.log(this.results);
  }
  setQuery(query: string) {
    this.querySubject.next(query);
  }

  getQuery() {
    return this.querySubject.asObservable();
  }
}
