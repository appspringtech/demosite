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
  public geoChartData: any;
  public lineChartData: any;
  public lineChartData2: any;
  public areaChartData2: any;
  public areaChartData3: any;

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
    this.buildDataForCharts();
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

  private buildDataForCharts(): void {
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

    this.geoChartData = {
      chartType: 'GeoChart',
      dataTable: [
        ['State', 'Stats'],
        ['US-AL', 5],
        ['US-AK', 6],
        ['US-AZ', 2],
        ['US-AR', 3],
        ['US-CA', 1],
        ['US-CO', 2],
        ['US-CT', 6],
        ['US-DE', 6],
        ['US-DC', 6],
        ['US-FL', 5],
        ['US-GA', 6],
        ['US-HI', 6],
        ['US-ID', 2],
        ['US-IL', 6],
        ['US-IN', 6],
        ['US-IA', 3],
        ['US-KS', 3],
        ['US-KY', 6],
        ['US-LA', 5],
        ['US-ME', 6],
        ['US-MT', 2],
        ['US-NE', 3],
        ['US-NV', 2],
        ['US-NH', 6],
        ['US-NJ', 6],
        ['US-NM', 2],
        ['US-NY', 6],
        ['US-NC', 6],
        ['US-ND', 2],
        ['US-OH', 6],
        ['US-OK', 3],
        ['US-OR', 1],
        ['US-MD', 6],
        ['US-MA', 6],
        ['US-MI', 6],
        ['US-MN', 3],
        ['US-MS', 5],
        ['US-MO', 3],
        ['US-PA', 6],
        ['US-RI', 6],
        ['US-SC', 6],
        ['US-SD', 2],
        ['US-TN', 6],
        ['US-TX', 4],
        ['US-UT', 2],
        ['US-VT', 6],
        ['US-VA', 6],
        ['US-WA', 1],
        ['US-WV', 6],
        ['US-WI', 6],
        ['US-WY', 2]
      ],
      options: {
        title: 'Lower 48 onshore crude oil production by region',
        height: 400,
        region: 'US',
        resolution: 'provinces',
        colorAxis: {values: [1, 2, 3, 4, 5, 6], colors: ['red', 'orange', 'yellow', 'blue', 'lime', 'green']},
        backgroundColor: '#81d4fa',
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5',
      }
    };

    this.lineChartData = {
      chartType: 'LineChart',
      dataTable: [
        ['Year', 'Electric Power', 'Industrial', 'Transportation', 'Residential', 'Comercial'],
        ['1990', 30, 21, 22, 7, 4],
        ['2000', 38, 24, 25, 7, 4],
        ['2010', 39, 19, 27, 6, 4],
        ['2020', 38, 23, 28, 6, 4],
        ['2030', 39, 26, 24, 6, 4],
        ['2040', 41, 28, 23, 5, 4.8],
        ['2050', 43, 30, 25, 5, 4.9]
      ],
      options: {
        height: 400,
        title: 'Energy consumption by sector',
        vAxis: {
          title: 'quadrillon British thermal units'
        }
      }
    };

    this.lineChartData2 = {
      chartType: 'LineChart',
      dataTable: [
        [
          'Year',
          'Net imports',
          'Low Oil and Gas Resource and Technology',
          'Low Oil Price',
          'High Economy Growth',
          'Refrence',
          'Low Economy Growth',
          'High Oil Price',
          'High Oil and Gas Resource and Technology',
        ],
        ['1990', 15, null, null, null, null, null, null, null],
        ['2000', 25, null, null, null, null, null, null, null],
        ['2010', 18, null, null, null, null, null, null, null],
        ['2020', 10, 10, 10, 10, 10, 10, 10, 10],
        ['2030', null, 4, 5, -6, -7, -9, -19, -18],
        ['2040', null, 6, 6, -6, -8, -12, -21, -25],
        ['2050', null, 10, 8, -2, -7, -11, -20, -30]
      ],
      options: {
        height: 400,
        title: 'Net energy trade',
        vAxis: {
          title: 'quadrillon British thermal units'
        }
      }
    };

    this.areaChartData2 = {
      chartType: 'AreaChart',
      dataTable: [
        [
          'Year',
          'Liquefied natural gas (LNG)',
          'Mexico (pipeline)',
          'Canada (pipeline)',
          'Canada (pipeline)',
          'LNG'
        ],
        ['2000', 0.5, 0.3, 0, -3.3, -3.5],
        ['2010', 1, 0.8, 0.5, -3.3, -3.5],
        ['2020', 6, 3, 1, -2.8, -3],
        ['2030', 9, 4, 1.5, -2.3, -2.5],
        ['2040', 9.5, 4.5, 2, -1.8, -2],
        ['2050', 9.8, 5, 2.5, -0.8, -1]
      ],
      options: {
        height: 400,
        title: 'Natural gas trade',
        vAxis: {
          title: 'trillion cubic feet'
        }
      }
    };

    this.areaChartData3 = {
      chartType: 'AreaChart',
      dataTable: [
        ['Year', 'Other', 'Linear fluorescent', 'Incandescent / Halogen', 'LED', 'CFL'],
        ['2010', 100, 95, 91, 41, 34],
        ['2020', 100, 95, 91, 50, 30],
        ['2030', 100, 95, 90, 80, 25],
        ['2040', 100, 96, 91, 85, 20],
        ['2050', 100, 97, 93, 90, 18]
      ],
      options: {
        height: 400,
        title: 'Residential lighting',
        vAxis: {
          title: 'percent of equipment stock'
        }
      }
    };
  }

}
