import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  //apiUrl: 'http://api.openweathermap.org/data/2.5/'
  //api.openweathermap.org/data/2.5/find?q=London&units=imperial
  //http://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}&units=imperial


  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&units=imperial&appid=${apiKey}`)
  }

  getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&units=imperial&appid=${apiKey}`)
  }

  getUv(lat: number, lon: number) {
    let startDate = Math.round(+moment(new Date()).subtract(1, 'week').toDate() / 1000);
    let endDate = Math.round(+moment(new Date()).add(1, 'week').toDate() / 1000);
    return this.http.get(`${environment.apiUrl}/uvi/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKey}`)
  }

}