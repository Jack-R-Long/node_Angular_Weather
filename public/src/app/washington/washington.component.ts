import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather_data: any; 
  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getWashington()
  }
  getWashington(){
    let observable = this._http.getWeather('Washington')
    observable.subscribe(data =>{
      console.log("Got Washington's weather")
      this.weather_data = data 
      console.log(this.weather_data)
    })

  }

}
