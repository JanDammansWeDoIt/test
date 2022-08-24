import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { next as nextPage } from '../../store/actions/navigation-actions';
import { Store } from '@ngrx/store';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _store:Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if ([401, 403].includes(error.status)) {
          this._store.dispatch(nextPage({ url: '/auth/login' }));
          return throwError(() => error);
        } else {
          console.error(error);
          return throwError(() => error);
        }
      }),
    );
  }
}
