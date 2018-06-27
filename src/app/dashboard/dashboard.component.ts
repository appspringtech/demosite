import { Component, OnInit } from '@angular/core';

class DashboardMenu {
  text: string;
  url: string;
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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
