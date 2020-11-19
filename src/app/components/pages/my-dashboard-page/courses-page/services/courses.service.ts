import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user';
import { ResponsePaginate, Response } from 'src/app/interfaces/course';
import { Course } from 'src/app/interfaces/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  user: User;
  subcriptions: Subscription[]=[];

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { 
 
    
  }



  private resultSubject$: BehaviorSubject<ResponsePaginate> = new BehaviorSubject(null)
  public get resultItems$() {
    return this.resultSubject$
  }
  public setItems(value) {
    this.resultSubject$.next(value)
  }



 ///listar
 getCoursesUser(currentPage = 1, perPage = 20, filter = '', sort = 'desc', user =  null): Observable<ResponsePaginate> {

    return this.http.get<ResponsePaginate>(`${environment.API}user_courses/${user?.id}`, {
      params: new HttpParams()
        .set('page', currentPage.toString())
        .set('filter', filter)
        .set('sort', sort)
        .set('per_page', perPage.toString())
        // .set('user_id', user?.id.toString() )

    }).pipe(map(
      res => {
        console.log(res);


        this.setItems(res)
        const resp = res
        return resp;
      }
    ))
  }





  openSnackBar(message: string, refClass: string, action: string = '') {
    this.snackBar.open(message, action, {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: refClass
    });
  }

  ngOnDestroy(): void {
    this.subcriptions.map(v=>v.unsubscribe())
    
  }
}
