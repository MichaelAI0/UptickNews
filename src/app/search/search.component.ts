import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '../service/search-results.service';
import { UptickNewsapiserviceService } from '../service/uptick-newsapiservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string = '';

  constructor(
    private searchResultsService: SearchResultsService,
    private _apiService: UptickNewsapiserviceService
  ) {}

  searchNewsDisplay: any = [];

  ngOnInit(): void {
    this.searchResultsService.getQuery().subscribe((query) => {
      this.query = query;
      console.log(query);
      // Call your API service here using the query
      this._apiService.getEverything(query).subscribe((result) => {
        this.searchNewsDisplay = result.articles;
        console.log(result.articles);
      });
    });
  }
}
