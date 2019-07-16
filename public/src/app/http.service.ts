import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getWeather()
  }
  getWeather(city){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',us&appid=f5cacb8f8a1b22dc32d2583653f4851b')

  }
}
