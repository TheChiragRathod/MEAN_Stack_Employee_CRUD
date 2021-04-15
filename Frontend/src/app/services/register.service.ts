import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:3000/insemp"
  loginUrl="http://localhost:3000/login"
 
  constructor(private http:HttpClient, private _router:Router) { }

  registerEmployee(data:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.url,data)
  }

  updateEmployee(data:Employee):Observable<Employee>
  {
    return this.http.patch<Employee>("http://localhost:3000/emp/"+data._id,data)
  }

  deleteEmployee(data:Employee):Observable<Employee>
  {
    return this.http.delete<Employee>("http://localhost:3000/delete_emp/"+data._id)
  }
  loginEmployee(data:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.loginUrl,data)
  }
  isLoggedIn():boolean
  {
    let auth_token=localStorage.getItem("employeeToken")
    
    return (auth_token)!==null?true:false;
  }

  logout()
  {
    localStorage.removeItem("employeeToken");
    this._router.navigate(['/login'])    
  }

 


}