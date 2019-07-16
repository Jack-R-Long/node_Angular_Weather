import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpService} from '../http.service' ;

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather_data: any; 

  constructor(
    private _route: ActivatedRoute,  //Activated route pulls params from URL
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getSeattle()
    // this._route.params.subscribe((params: Params) => {
    //           console.log(params['id'])
    //   });
  }
  getSeattle(){
    let observable = this._http.getWeather('Seattle')
    observable.subscribe(data =>{
      console.log("Got Seattle's weather")
      this.weather_data = data 
      console.log(this.weather_data)
    })

  }

}
