import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather_data: any; 
  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getChicago()
  }
  getChicago(){
    let observable = this._http.getWeather('Chicago')
    observable.subscribe(data =>{
      console.log("Got Chicago's weather")
      this.weather_data = data 
      console.log(this.weather_data)
    })

  }

}
