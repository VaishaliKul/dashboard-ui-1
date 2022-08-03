import { Component, OnInit } from '@angular/core';
import { colorSets } from '../../utils/ColorScheme';

@Component({
  selector: 'app-horizontalbar',
  templateUrl: './horizontalbar.component.html',
  styleUrls: ['./horizontalbar.component.css'],
})
export class HorizontalbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  view: any[] = [700, 400];
  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
    {
      name: 'China',
      value: 4500000,
    },
    {
      name: 'IndiA',
      value: 6700000,
    },
  ];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = colorSets[0];

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
