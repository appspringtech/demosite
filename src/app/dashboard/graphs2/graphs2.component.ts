import { Component, OnInit } from '@angular/core';

class InternetUsers {
  country: string;
  population: number;
  internetUsers: number;
}

@Component({
  selector: 'app-graphs2',
  templateUrl: './graphs2.component.html',
  styleUrls: ['./graphs2.component.scss']
})
export class Graphs2Component implements OnInit {

  public scatterChartData: any;
  public donutChartData: any;
  public bubbleChartData: any;
  public orgChartData: any;

  constructor() {
  }

  ngOnInit() {
    this.buildDataForCharts();
  }

  private buildDataForCharts(): void {
    this.scatterChartData = {
      chartType: 'Scatter',
      dataTable: [
        ['Age', 'Weight'],
        [ 8, 12],
        [ 4, 5.5],
        [ 11, 14],
        [ 4, 5],
        [ 3, 3.5],
        [ 6.5, 7]
      ],
      options: {
        height: 400,
        title: 'Age vs. Weight comparison',
        hAxis: {title: 'Age', minValue: 0, maxValue: 15},
        vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
        legend: 'none'
      }
    };

    this.donutChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      options: {
        height: 400,
        title: 'My Daily Activities',
        pieHole: 0.4,
      }
    };

    this.bubbleChartData = {
      chartType: 'BubbleChart',
      dataTable: [
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
        ['CAN', 80.66, 1.67, 'North America', 33739900],
        ['DEU', 79.84, 1.36, 'Europe', 81902307],
        ['DNK', 78.6, 1.84, 'Europe', 5523095],
        ['EGY', 72.73, 2.78, 'Middle East', 79716203],
        ['GBR', 80.05, 2, 'Europe', 61801570],
        ['IRN', 72.49, 1.7, 'Middle East', 73137148],
        ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
        ['ISR', 81.55, 2.96, 'Middle East', 7485600],
        ['RUS', 68.6, 1.54, 'Europe', 141850000],
        ['USA', 78.09, 2.05, 'North America', 307007000]
      ],
      options: {
        height: 400,
        title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
        hAxis: {title: 'Life Expectancy'},
        vAxis: {title: 'Fertility Rate'},
        bubble: {textStyle: {fontSize: 11}}
      }
    };

    this.orgChartData = {
      chartType: 'OrgChart',
      dataTable: [
        ['Name', 'Manager', 'Tooltip'],
        [{v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>'}, '', 'The President'],
        [{v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>'}, 'Mike', 'VP'],
        ['Alice', 'Mike', ''],
        ['Bob', 'Jim', 'Bob Connor'],
        ['Carol', 'Bob', '']
      ],
      options: {
        height: 400,
        allowHtml: true
      }
    };

  }

}
