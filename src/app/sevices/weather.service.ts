import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'bf84dbf8c54ae7967636dd83f83e53f0';
  city = 'Sleman';

  constructor(private http: HttpClient) {}
  getDataNow() {
    return this.http.get(
      `${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`
    );
  }
  getDataForecast() {
    return this.http.get(
      `${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`
    );
  }
}
