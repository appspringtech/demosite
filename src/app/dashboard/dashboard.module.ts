import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { GraphsComponent } from './graphs/graphs.component';
import { Graphs2Component } from './graphs2/graphs2.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/app/(dashboard_page:home)', pathMatch: 'full' },
  { path: '', children: [
    { path: 'app', component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent, outlet: 'dashboard_page' },
      { path: 'technologies', component: TechnologiesComponent, outlet: 'dashboard_page' },
      { path: 'graphs', component: GraphsComponent, outlet: 'dashboard_page' },
      { path: 'graphs2', component: Graphs2Component, outlet: 'dashboard_page' }
    ] }
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng2GoogleChartsModule,
  ],
  declarations: [HomeComponent, DashboardComponent, TechnologiesComponent, GraphsComponent, Graphs2Component]
})
export class DashboardModule { }
