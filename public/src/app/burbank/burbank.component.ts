import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather_data: any; 
  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getBurbank()
  }
  getBurbank(){
    let observable = this._http.getWeather('Burbank')
    observable.subscribe(data =>{
      console.log("Got Burbank's weather")
      this.weather_data = data 
      console.log(this.weather_data)
    })

  }

}
