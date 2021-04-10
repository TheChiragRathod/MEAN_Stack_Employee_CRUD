import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetDataService } from '../services/get-data.service';
import { RegisterService } from '../services/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _service:RegisterService, private _router:Router) {}
  canActivate():boolean
  {
    if(this._service.isLoggedIn())
    return true;
    else
    {
      this._router.navigate(['/login'])
     
    }
  }
  
}
