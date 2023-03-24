import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // token aus session storage holen
    const token = sessionStorage.getItem('auth-token');

    if (token) {
      // request klonen und mit Authorization Header erweitern
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });

      // geklonten request weiterschicken
      return next.handle(cloned);
    } else {
      // originalen request weiterschicken (wenn kein token vorhanden ist)
      return next.handle(request);
    }
  }
}
