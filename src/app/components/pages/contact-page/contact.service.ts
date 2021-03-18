import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface MailContact{
  name:string;
  email:string;
  phone:string;
  massage:string;
}


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }


  sendMailContact(data: MailContact):Observable<string>{
    return this.http.post<any>(`${environment.API}send-message-contact`, data)
  }
}
