import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor(private _getData:GetDataService) { }

  intercept(req,next)
  {
      let tokenizedReq = req.clone(
        {
          setHeaders:{
            Authorization:"Bearer "+this._getData.getAccessToken()
          }
        }
      )
      return next.handle(tokenizedReq)
  }
}
