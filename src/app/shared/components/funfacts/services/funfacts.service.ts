import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginate, ResponsePaginate } from 'src/app/interfaces/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunfactsService {

  constructor(
    private http: HttpClient,

  ) { }

  getUsers():Observable<Paginate>{
    return this.http.get<ResponsePaginate>(`${environment.API}accounts`).pipe(map(
      v => v.data
    ))
  }

  getCourses():Observable<Paginate>{
    return this.http.get<ResponsePaginate>(`${environment.API}courses`).pipe(map(
      v => v.data
    ))
  }

}
