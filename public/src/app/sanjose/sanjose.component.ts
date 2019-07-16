import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather_data: any; 

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getSanJose()
  }
  getSanJose(){
    let observable = this._http.getWeather('San Jose')
    observable.subscribe(data =>{
      console.log("Got San Jose's weather")
      this.weather_data = data 
      console.log(this.weather_data)
    })
  }

}
