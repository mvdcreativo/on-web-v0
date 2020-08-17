import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course, ResponseCourses, ResponseCourse, Category, ResponseCategory } from '../interfaces/course';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {



  constructor(
    private http : HttpClient
  ) {
 
   }

  public url = "assets/data/";

  public getCourses(): Observable<Course[]> {
    return this.http.get<ResponseCourses>(`${environment.API}courses`).pipe(map( res => res.data));
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


