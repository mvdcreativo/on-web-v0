import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private authService: AuthService
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {

                if(err.error.message === "Unauthorized"){
                    this.authService.errorSubject.next('Usuario o contraseña incorrectos')
                    
                }
            }
            if (err.status === 422) {
                console.log(err.error.message);
                
                if(err.error.message === "The given data was invalid."){
                    this.authService.errorSubject.next('El Usuario ya existe')
                    
                }
            }


            if (err.status === 404) {
                this.router.navigate(['/pagina-no-encontrada']);
            }


            if(!err){
                this.authService.errorSubject.next(null)

            }
            const error = err.error.message || err.statusText;
            // console.error(error);
            
            return throwError(error);

        }))
    }
}