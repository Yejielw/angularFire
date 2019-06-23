import { WeatherService } from './../weather.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-weather',
  templateUrl: './submit-weather.component.html',
  styleUrls: ['./submit-weather.component.sass'],
  encapsulation: ViewEncapsulation.None,

})
export class SubmitWeatherComponent implements OnInit {
  public weatherEntry: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherEntry = this.createWeatherForm()
  }
  createWeatherForm(): FormGroup {
    return this._formBuilder.group({
      temperature: ['',  Validators.required],
      humidity: ['' , Validators.required],
      pressure: ['' , Validators.required],
    });
  }
  save(){
    if(this.weatherEntry.invalid){
      return;
    }
    this.weatherService.addEntry(this.weatherEntry.value).then( data => {
      this.weatherEntry.reset()
    } )
  }
}
