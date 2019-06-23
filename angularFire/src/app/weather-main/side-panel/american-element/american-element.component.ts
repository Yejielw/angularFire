import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Entry } from 'src/app/models/entry.model';
import { WeatherService } from '../../weather.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-american-element',
  templateUrl: './american-element.component.html',
  styleUrls: ['./american-element.component.sass'],
  encapsulation: ViewEncapsulation.None,

})
export class AmericanElementComponent implements OnInit {
 
  @Input() weatherSingleValue: any;
  displayValue: BehaviorSubject<number>;
  private unsuscribeValue: Subject<any>;
  suscribed: boolean;


  constructor(
    private weatherservice: WeatherService
  ) { 
    this.suscribed = false;

    this.displayValue = new BehaviorSubject(null)
  }

  ngOnInit() {
    this.displayValue.next(this.convertToF(this.weatherSingleValue.temperature))
  }

  convertToF(temperature):number{
    return temperature * 9 / 5 + 32;
  }

  suscribe(){
    this.suscribed = true;
    this.unsuscribeValue = new Subject();

    this.weatherservice.entries.pipe(
      takeUntil(this.unsuscribeValue)
    ).subscribe(entry => {
      this.displayValue.next(this.convertToF(entry[0].temperature))

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