import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:3000/insemp"
  "http://localhost:3000/emp/:id"
  constructor(private http:HttpClient) { }

  registerEmployee(data:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.url,data)
  }

  updateEmployee(data:Employee):Observable<Employee>
  {
    return this.http.patch<Employee>("http://localhost:3000/emp/"+data._id,data)
  }
}