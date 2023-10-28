import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }
    series: Array<Serie> = [];
    sumseries: number= 0;
    numseries:number=0;
    promTotal:number=0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.promSeries();
    });
  }

  promSeries(){
    for(let s of this.series){
      this.sumseries = this.sumseries + s.seasons;
      this.numseries = this.numseries + 1
    }

    return this.promTotal= this.sumseries/this.numseries

  }
  ngOnInit() {
    this.getSeries();
  }
}