import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class CanActivateDashboardGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate() {
    if ( ! this.authService.hasSession()) {
      this.router.navigate(['/auth']);

      return false;
    }

    return true;
  }

}
