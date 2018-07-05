import { Component, OnInit } from '@angular/core';

class InternetUsers {
  country: string;
  population: number;
  internetUsers: number;
}

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  public pieChartData: any;
  public columnChartData: any;

  // Source https://www.internetworldstats.com/top20.htm
  public countries: InternetUsers[] = [
    {
      country: 'China',
      population: 1415045928,
      internetUsers: 772000000
    },
    {
      country: 'India',
      population: 1354051854,
      internetUsers: 462124989,
    },
    {
      country: 'United States',
      population: 326766748,
      internetUsers: 312322257
    },
    {
      country: 'Brazil',
      population: 210867954,
      internetUsers: 149057635
    },
    {
      country: 'Indonesia',
      population: 266794980,
      internetUsers: 143260000
    }
  ];

  public country: string;
  public population: number;
  public internetUsers: number;

  constructor() {
  }

  ngOnInit() {
    this.buildChartsData();
  }

  addCountry(): void {
    this.countries.push({
      country: this.country,
      population: this.population,
      internetUsers: this.internetUsers
    });
    this.country = null;
    this.population = null;
    this.internetUsers = null;
    this.buildChartsData();
  }

  private buildChartsData(): void {
    const pieChartData: any = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day']
      ],
      options: {'title': 'Internet Users'},
    };

    const columnChartData: any = {
      chartType: 'ColumnChart',
      dataTable: [
        ['Country', 'Population', 'Internet Users']
      ],
      options: {title: 'Internet Users'}
    };

    this.countries.forEach(o => {
      pieChartData.dataTable.push([o.country, o.internetUsers]);
      columnChartData.dataTable.push([o.country, o.population, o.internetUsers]);
    });

    this.pieChartData = pieChartData;
    this.columnChartData = columnChartData;
  }

}
