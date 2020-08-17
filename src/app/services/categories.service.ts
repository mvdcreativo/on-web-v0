import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Category, ResponseCourses, ResponseCategories, ResponseCategory } from '../interfaces/course';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http : HttpClient
    ) { }
  
    public url = "assets/data/";
  
    public getCategories(): Observable<Category[]> {
      return this.http.get<ResponseCategories>(`${environment.API}categories`).pipe(map( res => res.data));
    }

    public getCourseByCategorySlug(slug): Observable<Category> {
      return this.http.get<ResponseCategory>(`${environment.API}courses-category/${slug}`).pipe(map( res => res.data));
      
    }
}
