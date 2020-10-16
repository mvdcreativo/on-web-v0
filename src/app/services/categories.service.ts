import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Category, ResponseCourses, ResponseCategories, ResponseCategory, ResponsePaginate } from '../interfaces/course';
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
      let perPage = 1000;
      return this.http.get<ResponsePaginate>(`${environment.API}categories`, {
        params: new HttpParams()
          .set('per_page', perPage.toString())
  
      }).pipe(map( res => res.data.data));
    }

    public getCourseByCategorySlug(slug): Observable<Category> {
      return this.http.get<ResponseCategory>(`${environment.API}courses-category/${slug}`).pipe(map( res => res.data));
      
    }
}
