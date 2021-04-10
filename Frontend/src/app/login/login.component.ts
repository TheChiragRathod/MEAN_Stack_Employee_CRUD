import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;



  constructor(private _service:RegisterService, private _router:Router) { }

  ngOnInit(): void 
  {
      this.LoginForm=new FormGroup
      (
          {
            'email':new FormControl(null,[Validators.required,Validators.email]),
            'password':new FormControl(null,Validators.required),
          }
      );
  }

  onLogin()
  {
  this._service.loginEmployee(this.LoginForm.value).subscribe(
    res=>
    {
      this.LoginForm.reset()
      localStorage.setItem("employeeToken",res['token'])
      this._router.navigate(['/'])
      alert("success")
      
    },
    err=>
    {
      console.log(err)
    }
  );
  }
  get f() { return this.LoginForm.controls; }

}
