import { Component, OnInit } from '@angular/core';
import { Series } from './series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  private series: Array<Series> = [];

  constructor() { }

  ngOnInit() {
  }

}
