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
  somthingWrong:boolean=false;
  EmailWrongError=false
  PasswordWrongError=false
  


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
      this._router.navigate(['/employees'])
      this.EmailWrongError=false
      this.PasswordWrongError=false
      this.somthingWrong=false
    },
    err=>
    {
      if(err.status==400)
      this.EmailWrongError=true
      if(err.status==401)
      this.PasswordWrongError=true
      if(err.status==404)
      {
        this.somthingWrong=true
      }
      
    }
  );
  }
  get f() { return this.LoginForm.controls; }

}
