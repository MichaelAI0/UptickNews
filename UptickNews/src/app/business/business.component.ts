import { Component, OnInit } from '@angular/core';
import { UptickNewsapiserviceService } from '../service/uptick-newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  constructor(private _services: UptickNewsapiserviceService) {}

  businessNewsDisplay: any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) => {
      this.businessNewsDisplay = result.articles;
    });
  }
}
