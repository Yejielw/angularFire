import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitWeatherComponent } from './submit-weather/submit-weather.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { StatisticsComponent } from './side-panel/statistics/statistics.component';
import { AmericanElementComponent } from './side-panel/american-element/american-element.component';
import { TextElementComponent } from './side-panel/text-element/text-element.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    SubmitWeatherComponent,
    SidePanelComponent,
    StatisticsComponent,
    AmericanElementComponent,
    TextElementComponent,
    MainDisplayComponent],
  imports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class WeatherMainModule { }
