import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth/auth.service';

class DashboardMenu {
  text: string;
  url: string;
  submenus?: DashboardMenu[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public menuItems: DashboardMenu[] = [
    {
      text: 'Home',
      url: 'home'
    },
    {
      text: 'Technologies',
      url: 'technologies'
    },
    {
      text: 'Graphs',
      url: '',
      submenus: [
        {
          text: 'Graphs 1',
          url: 'graphs'
        },
        {
          text: 'Graphs 2',
          url: 'graphs2'
        }
      ]
    }
  ];

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  doLogout(): void {
    this.authService.closeSession();
    this.router.navigate(['/auth']);
  }

}
