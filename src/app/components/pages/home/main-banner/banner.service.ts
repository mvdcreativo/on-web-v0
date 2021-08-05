import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Image } from "./interface/image";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
      private http: HttpClient,
  ) { }

  getCarousel(): Observable<Image[]>{
      return this.http.get<Image[]>(`${environment.API}carousel-active`)
  }
}
