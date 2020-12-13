import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Course, ResponseCourses, ResponseCourse, Category, ResponseCategory, ResponsePaginate } from '../interfaces/course';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private resultSubject$: BehaviorSubject<ResponsePaginate> = new BehaviorSubject(null)
  idProduct: any;
  public get resultItems$() {
    return this.resultSubject$
  }
  public setItems(value) {
    this.resultSubject$.next(value)
  }


  constructor(
    private http : HttpClient,
    
  ) {
 
   }

  public url = "assets/data/";

  // public getCourses(): Observable<Course[]> {
  //   return this.http.get<ResponseCourses>(`${environment.API}courses`).pipe(map( res => res.data));
  // }

  getProducts(currentPage = 1, perPage = 1000, filter='', sort= 'desc', status=[1,3]) : Observable<ResponsePaginate>{
    const status_ids = JSON.stringify(status)
    return this.http.get<ResponsePaginate>(`${environment.API}courses`, {
      params: new HttpParams()
        .set('page', currentPage.toString())
        .set('filter', filter)
        .set('sort', sort)
        .set('per_page', perPage.toString())
        .set('status', status_ids)

    }).pipe(map(
      res => {
        console.log(res);
        
        this.setItems(res)
        const resp = res
        return resp;
      }
    ),
    catchError(error => {
      return this.errorHandler(error)
    })
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "error en la solicitud.");
  }

  public getCourse(id): Observable<Course> {
    // return this.http.get<Course>(this.url + 'courses.json' id);
    return
  }

  public getCourseBySlug(slug): Observable<Course> {
    return this.http.get<ResponseCourse>(`${environment.API}course/${slug}`).pipe(map( res => res.data));
    
  }

  public getCoursesDestac(): Observable<Course[]> {
    return this.http.get<ResponseCourses>(`${environment.API}courses-destac`).pipe(map( res => res.data));
    
  }
}


