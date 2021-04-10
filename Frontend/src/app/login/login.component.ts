import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;



  constructor() { }

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

  }
  get f() { return this.LoginForm.controls; }

}
