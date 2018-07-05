import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public organization: string;
  public username: string;
  public password: string;
  public hasValidOrganization = false;
  public hasOrganizationError = false;
  public hasCredentialsError = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  submitOrganization(): void {
    this.hasOrganizationError = false;
    this.authService.submitOrganization(this.organization).subscribe(() => {
      this.hasValidOrganization = true;
    }, err => {
      this.hasOrganizationError = true;
      console.error(err);
    });
  }

  submitCredentials(): void {
    this.hasCredentialsError = false;
    this.authService.submitCredentials(this.username, this.password).subscribe(() => {
      this.router.navigate(['/dashboard']);
    }, err => {
      this.hasCredentialsError = true;
      console.error(err);
    });
  }

}
