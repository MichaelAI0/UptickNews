import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path: '', component: TopheadingComponent },
  { path: 'tech', component: TechnewsComponent },
  { path: 'business', component: BusinessComponent },
  {
    path: 'health',
    component: HealthComponent,
  },
  { path: 'search/:searchTerm', component: TopheadingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
