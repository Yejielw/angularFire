import { WeatherMainModule } from './weather-main/weather-main.module';
import { MainDisplayComponent } from './weather-main/main-display/main-display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {
  path      : '**',
  component: MainDisplayComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WeatherMainModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
