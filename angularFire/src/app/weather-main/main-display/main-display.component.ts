import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.sass']
})
export class MainDisplayComponent implements OnInit {

  constructor(
    public entriesService: WeatherService
  ) { }

  ngOnInit() {

  }

}
