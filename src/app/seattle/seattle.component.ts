import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city = 'seattle'
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind_speed;
  wind_direction;
  status;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather(this.city, (weather) => {
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp = Math.floor(this.temp * (9/5) - 459.67);
      this.maxTemp = weather.main.temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67);
      this.minTemp = weather.main.temp_min;
      this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67);
      this.status = weather.weather[0].main;
      this.wind_speed = weather.wind.speed;
      this.wind_direction = weather.wind.deg;
      console.log(this.weather);
    });
  }

}
