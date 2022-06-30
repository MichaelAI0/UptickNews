import { Component, OnInit } from '@angular/core';
import { UptickNewsapiserviceService } from '../service/uptick-newsapiservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  constructor(private _services: UptickNewsapiserviceService) {}

  healthNewsDisplay: any = [];

  ngOnInit(): void {
    this._services.healthNews().subscribe((result) => {
      this.healthNewsDisplay = result.articles;
    });
  }
}
