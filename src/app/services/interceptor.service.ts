import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    console.log('INTERCEPTADO');
    
    const newReq = req.clone({setHeaders:{
      Authorization: 'Yeah right'
    }})
    
    return next.handle(newReq);
    
  }

  constructor() { }

}