import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/emp";
  getEmployees()
  {
    return this.http.get(this.url);
  }
}
