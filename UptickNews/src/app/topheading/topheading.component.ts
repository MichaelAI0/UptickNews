import { Component, OnInit } from '@angular/core';
import { UptickNewsapiserviceService } from '../service/uptick-newsapiservice.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent implements OnInit {
  constructor(private _services: UptickNewsapiserviceService) {}

  topheadingDisplay: any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topheadingDisplay = result.articles;
    });
  }
}
