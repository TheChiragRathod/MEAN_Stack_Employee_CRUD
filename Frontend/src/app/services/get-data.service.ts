import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  LocalURL="http://localhost:3000/"
  HerokuURL="https://chiragmean.herokuapp.com/"

  constructor(private http:HttpClient) { }

  url=this.HerokuURL+"emp";
  getEmployees()
  {
    return this.http.get(this.url);
  }
  getAccessToken()
  {
    return localStorage.getItem("employeeToken")
  }
}