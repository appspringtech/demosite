import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './shared/guards/can-activate-auth.guard';
import { CanActivateDashboardGuard } from './shared/guards/can-activate-dashboard.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate: [CanActivateAuthGuard] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [CanActivateDashboardGuard] },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
