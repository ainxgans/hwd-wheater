import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { WeatherService } from './../sevices/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public forecast: any = {};
  constructor(private weathersevice: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.weathersevice.getDataForecast().subscribe((result) => {
      this.forecast = result;
    });
  }
  detailpage(forecast: any) {
    let weather = {
      date: forecast.dt_txt,
      temp: forecast.main.temp,
      main: forecast.weather[0].main,
      desc: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
    };
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(weather),
      },
    };
    this.router.navigate(['/detail'], extras);
  }
}
