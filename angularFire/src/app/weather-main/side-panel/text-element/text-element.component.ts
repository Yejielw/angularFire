import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Entry } from 'src/app/models/entry.model';
import { takeUntil } from 'rxjs/operators';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.sass'],
  encapsulation: ViewEncapsulation.None,

})
export class TextElementComponent implements OnInit {

  @Input() weatherSingleValue: any;
  displayValue: BehaviorSubject<Entry>;
  private unsuscribeValue: Subject<any>;
  suscribed: boolean;


  constructor(
    private weatherservice: WeatherService
  ) { 
    this.suscribed = false;

    this.displayValue = new BehaviorSubject(null)
  }

  ngOnInit() {
    this.displayValue.next(this.weatherSingleValue.temperature)
  }



  suscribe(){
    this.suscribed = true;
    this.unsuscribeValue = new Subject();

    this.weatherservice.entries.pipe(
      takeUntil(this.unsuscribeValue)
    ).subscribe(entry => {
      this.displayValue.next(entry[0].temperature)

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
