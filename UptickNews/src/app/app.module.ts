import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { UptickNewsapiserviceService } from './service/uptick-newsapiservice.service';

@NgModule({
  declarations: [AppComponent, TopheadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [UptickNewsapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
