import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  view = 100;
  ngOnInit(): void {}
  sideBartoggle() {
    this.view = this.view == 100 ? 75 : 100;
  }
}
