import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string, cb) {
    // return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&APPID=ac3484a253642a82f9cde301c8e732b8`)
    // return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=90d0b79bd6205d862f8457b4d0c44e76`)
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=90d0b79bd6205d862f8457b4d0c44e76`)
      .subscribe((res) => {
        cb(res.json());
      }
    )
    // .map( data => data.json() )
    // .toPromise();
  }

}
