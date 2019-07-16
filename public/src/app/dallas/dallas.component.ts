import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather_data: any; 
  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getDallas()
  }
  getDallas(){
    let observable = this._http.getWeather('Dallas')
    observable.subscribe(data =>{
      console.log("Got Dallas's weather")
      this.weather_data = data 
      console.log(this.weather_data)
    })
  }

}
