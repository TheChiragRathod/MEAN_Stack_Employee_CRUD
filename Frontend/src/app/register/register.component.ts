import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm:FormGroup;
  somthingWrong:boolean=false;
  EmailIsUsedError:boolean=false;
  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
    this.RegisterForm=new FormGroup
    (
          {
              'name':new FormControl(null,[Validators.required,Validators.minLength(2)]),
              'email':new FormControl(null,[Validators.required,Validators.email]),
              'password':new FormControl(null,[Validators.required,Validators.minLength(5)]),         
              'city':new FormControl(null,[Validators.required,Validators.minLength(2)]),
        
              'address':new FormControl(null,[Validators.required,Validators.minLength(2)]),
          }
    );
  }
  get f() { return this.RegisterForm.controls; }

  onRegister()
  {
    this._service.registerEmployee(this.RegisterForm.value).subscribe(
      res=>
      {
        Swal.fire("Good job!", "Registration Successfully Done!", "success");
        this.RegisterForm.reset()
        this.somthingWrong=false
        this.EmailIsUsedError=false
      },
      err=>
      {
        if(err.status==404)
        {
          this.somthingWrong=true
        }
        if(err.status==401)
        {
          this.EmailIsUsedError=true
        }
        
      }
      
    )
  }

}
