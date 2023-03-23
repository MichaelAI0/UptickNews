import { Component, OnInit } from '@angular/core';
import { UptickNewsapiserviceService } from 'src/app/service/uptick-newsapiservice.service';
import { SearchResultsService } from 'src/app/service/search-results.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  query: string = '';

  constructor(
    private apiService: UptickNewsapiserviceService,
    private searchResultsService: SearchResultsService
  ) {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.query !== '') {
      this.apiService.getEverything(this.query).subscribe((data) => {
        this.searchResultsService.results = data.articles;
      });
    }
    if (this.query !== '') {
      this.searchResultsService.setQuery(this.query);
      this.query = '';
    }
  }
}
