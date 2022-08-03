import { Component, OnInit } from '@angular/core';
import { colorSets } from '../../utils/ColorScheme';
import { single } from './../data';

@Component({
  selector: 'app-verticalbarchart',
  templateUrl: './verticalbarchart.component.html',
  styleUrls: ['./verticalbarchart.component.css'],
})
export class VerticalbarchartComponent {
  single: any[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = colorSets[0];

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
}
