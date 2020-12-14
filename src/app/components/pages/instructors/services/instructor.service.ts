import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { ResponsePaginate, Response } from 'src/app/interfaces/course';
import { toFormData } from 'src/app/shared/utils/forms/to-form-data';
import { environment } from 'src/environments/environment';
import { Instructor } from '../interfaces/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(
    private http: HttpClient,
    // private snackBar: MatSnackBar
  ) { }



  private resultSubject$: BehaviorSubject<ResponsePaginate> = new BehaviorSubject(null)
  public get resultItems$() {
    return this.resultSubject$
  }
  public setItems(value) {
    this.resultSubject$.next(value)
  }



  ///listar
  getInstructors(currentPage = 1, perPage = 20, filter = '', sort = 'desc'): Observable<ResponsePaginate> {
    return this.http.get<ResponsePaginate>(`${environment.API}instructors`, {
      params: new HttpParams()
        .set('page', currentPage.toString())
        .set('filter', filter)
        .set('sort', sort)
        .set('per_page', perPage.toString())

    }).pipe(map(
      res => {
        console.log(res);


        this.setItems(res)
        const resp = res
        return resp;
      }
    ),
      
    )
  }


  getInstructor(slug):Observable<Response>{
    return this.http.get<Response>(`${environment.API}instructors/${slug}`)
 
  }

  getInstructorCourses(id):Observable<Response>{
    return this.http.get<Response>(`${environment.API}courses_instructor?instructor_id=${id}`)
  }






  // openSnackBar(message: string, refClass: string, action: string = '') {
  //   this.snackBar.open(message, action, {
  //     duration: 1000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //     panelClass: refClass
  //   });
  // }


}
