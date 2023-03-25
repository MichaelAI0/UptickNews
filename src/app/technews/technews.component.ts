import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UptickNewsapiserviceService } from '../service/uptick-newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css'],
})
export class TechnewsComponent implements OnInit {
  constructor(private _services: UptickNewsapiserviceService) {}

  technewsDisplay: any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result) => {
      this.technewsDisplay = result.articles;
    });
  }
}
