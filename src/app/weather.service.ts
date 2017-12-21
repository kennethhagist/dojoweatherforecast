import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&APPID=ac3484a253642a82f9cde301c8e732b8`)
    .map( data => data.json() )
    .toPromise();
  }

}