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
  public columnGroupedChartData: any;
  public columnStackedChartData: any;
  public barChartData: any;
  public areaChartData: any;

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
    this.buildDataForEnergyCharts();
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

  private buildDataForEnergyCharts(): void {
    this.columnGroupedChartData = {
      chartType: 'ColumnChart',
      dataTable: [
        ['Country', '2010', '2015', '2020', '2030', '2040'],
        ['Russia', 9, 11, 11, 10, 12],
        ['Canada', 3, 3.5, 4, 4, 5],
        ['Brazil', 2, 2.5, 3, 3.5, 4],
        ['Kazakhstan', 1, 1.5, 1.8, 2, 2]
      ],
      options: {
        height: 400,
        title: 'Crude and lease condensate production',
        vAxis: {
          title: 'million barrels per day'
        }
      }
    };

    this.columnStackedChartData = {
      chartType: 'ColumnChart',
      dataTable: [
        ['Year', 'Europe and Eurasia', 'Americas', 'Africa', 'Middle East', 'Asia'],
        ['1990', 55, 15, 15, 15, 50],
        ['2000', 40, 20, 20, 20, 70],
        ['2010', 50, 25, 25, 25, 150],
        ['2015', 50, 30, 30, 30, 200],
        ['2020', 50, 35, 35, 35, 250],
        ['2030', 50, 40, 40, 40, 300],
        ['2040', 50, 45, 45, 45, 350]
      ],
      options: {
        height: 400,
        title: 'Non-OECD energy consumption by region',
        vAxis: {
          title: 'quadrillion Btu'
        },
        isStacked: true,
      }
    };

    this.barChartData = {
      chartType: 'BarChart',
      dataTable: [
        ['County', 'Energy Consumption'],
        ['Middle East', 12],
        ['United States', 11],
        ['China', 9],
        ['Russia', 4.5],
        ['Australia and New Zealand', 4.4],
        ['Africa', 4.3],
        ['Other non-OECD Asia', 4.2],
        ['Canada', 1.5],
        ['Non-OECD Americas', 1]
      ],
      options: {
        height: 400,
        title: 'Non-OECD energy consumption by region',
        hAxis: {
          title: 'trillion cubic feet'
        }
      }
    };

    this.areaChartData = {
      chartType: 'AreaChart',
      dataTable: [
        ['Year', 'Natural Gasoline', 'Isobutane', 'Normal Butane', 'Propane', 'Ethane'],
        ['2000', 2, 1.8, 1.7, 1.5, 0.8],
        ['2010', 1.8, 1.7, 1.6, 1.4, 0.7],
        ['2020', 5, 4.5, 3.8, 3.5, 1.8],
        ['2030', 5.2, 4.8, 4, 3.8, 2],
        ['2040', 5.4, 4.9, 4.2, 4, 2.2],
        ['2050', 5.6, 5, 4.4, 4.2, 2.4]
      ],
      options: {
        height: 400,
        title: 'U.S. natural gas plant liquids production by fuel',
        vAxis: {
          title: 'million barrels per day'
        }
      }
    };
  }

}
