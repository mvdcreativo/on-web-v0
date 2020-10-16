import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authService.logout();
                if(err.error.message === "Unauthorized"){
                    this.authService.errorSubject.next('Usuario o contraseña incorrectos')
                    
                }
                
                localStorage.removeItem('currentUser')               
                
                // 
                // location.reload(true);

            }

            const error = err.error.message || err.statusText;
            console.log(error);
            
            return throwError(error);

        }))
    }
}