import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../sevices/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public forecast: any = {};
  constructor(private weathersevice: WeatherService) {}

  ngOnInit(): void {
    this.weathersevice.getDataForecast().subscribe((result) => {
      this.forecast = result;
      console.log(result);
    });
  }
}
