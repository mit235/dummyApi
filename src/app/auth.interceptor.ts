import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from './service/service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service:ServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.service.getToken();

    const authReq = request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(authReq);
  }
}
