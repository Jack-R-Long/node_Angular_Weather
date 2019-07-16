import { Component} from '@angular/core';
import {HttpService} from './http.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: any ; 

  constructor(private _httpService: HttpService){
	}
	// getWeatherFromServe(){
  //   let observable = this._httpService.getWeather()
  //   observable.subscribe(data=>{
  //     console.log("Got our weather")
  //     console.log(data)
  //     this.weather = data
  //   })
  // }
}

