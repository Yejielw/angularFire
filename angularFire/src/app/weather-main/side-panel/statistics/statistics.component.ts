import { WeatherService } from './../../weather.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Entry } from 'src/app/models/entry.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass'],
  encapsulation: ViewEncapsulation.None,

})
export class StatisticsComponent implements OnInit {

  @Input() weatherSingleValue: any;
  displayValue: BehaviorSubject<Entry>;
  private unsuscribeValue: Subject<any>;

  min_max_avg: number[];
  max: number;
  avg: number;
  suscribed: boolean;

  constructor(
    private weatherservice: WeatherService
  ) { 
    this.suscribed = false;

    this.displayValue = new BehaviorSubject(null)
  }

  ngOnInit() {
    this.displayValue.next(this.weatherSingleValue)
    this.getAvg(this.weatherSingleValue)
  }
  getMinMaxAvg(entries){
    return entries.reduce((acc, val) => {
      acc[0] = ( acc[0] === undefined || val.temperature < acc[0] ) ? val.temperature : acc[0]
      acc[1] = ( acc[1] === undefined || val.temperature > acc[1] ) ? val.temperature : acc[1]
      acc[2] = ( acc[2] === undefined  ) ? val.temperature   : acc[2] + val.temperature 

      return acc;
  }, []);
  }

  getAvg(entries){
    this.min_max_avg = this.getMinMaxAvg(entries)
  }
  suscribe(){
    this.suscribed = true;
    this.unsuscribeValue = new Subject();

    this.weatherservice.entries.pipe(
      takeUntil(this.unsuscribeValue)
    ).subscribe(entry => {
      this.displayValue.next(entry[0])
      this.getAvg(entry)

    })
  }
  unsuscribe(){
    this.suscribed = false
    this.unsuscribeValue.next();
    this.unsuscribeValue.complete();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsuscribe()
  }
}
