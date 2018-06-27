import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/app/(dashboard_page:home)', pathMatch: 'full' },
  { path: '', children: [
    { path: 'app', component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent, outlet: 'dashboard_page' },
      { path: 'technologies', component: TechnologiesComponent, outlet: 'dashboard_page' }
    ] }
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, DashboardComponent, TechnologiesComponent]
})
export class DashboardModule { }
