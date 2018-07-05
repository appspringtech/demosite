import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieModule } from 'ngx-cookie';

import { AuthService } from './services/auth/auth.service';
import { CanActivateAuthGuard } from './guards/can-activate-auth.guard';
import { CanActivateDashboardGuard } from './guards/can-activate-dashboard.guard';

@NgModule({
  imports: [
    CommonModule,
    CookieModule.forRoot()
  ],
  declarations: [],
  providers: [
    AuthService,
    CanActivateAuthGuard,
    CanActivateDashboardGuard,
  ]
})
export class SharedModule { }
