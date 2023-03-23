import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { UptickNewsapiserviceService } from './service/uptick-newsapiservice.service';
import { TechnewsComponent } from './technews/technews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AuthComponent } from './auth/auth.component';
import { BusinessComponent } from './business/business.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HealthComponent } from './health/health.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    AuthComponent,
    BusinessComponent,
    SearchComponent,
    HealthComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule,
  ],
  providers: [UptickNewsapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
