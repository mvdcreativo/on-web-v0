import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user';
import { ResponsePaginate, Response } from 'src/app/interfaces/course';
import { Order } from 'src/app/interfaces/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService implements OnDestroy {

  user: User;
  subcriptions: Subscription[]=[];

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) { 
 
    
  }



  private resultSubject$: BehaviorSubject<ResponsePaginate> = new BehaviorSubject(null)
  public get resultItems$() {
    return this.resultSubject$
  }
  public setItems(value) {
    this.resultSubject$.next(value)
  }

  storeOrder(data): Observable<any>{
    return this.http.post<Response>(`${environment.API}orders`, data).pipe(
      map( v => {
        // this.getOrders(1, 20, '', 'desc').pipe(take(1)).subscribe()
        //snacbarr
        this.openSnackBar('Se creó correctamente','success-snack-bar')
        //////////
        return v
      })
    )

  }

  updateOrder(data): Observable<Order>{
    return this.http.put<Response>(`${environment.API}orders/${data.id}`, data).pipe(
      map( v => {
        this.getOrders(1, 20, '', 'desc').pipe(take(1)).subscribe()
        //snacbarr
        this.openSnackBar('Actualizado correctamente','success-snack-bar')
        //////////
        return v.data
      })
    )

  }

  ///listar
 getOrders(currentPage = 1, perPage = 20, filter = '', sort = 'desc', user =  null): Observable<ResponsePaginate> {

    return this.http.get<ResponsePaginate>(`${environment.API}orders`, {
      params: new HttpParams()
        .set('page', currentPage.toString())
        .set('filter', filter)
        .set('sort', sort)
        .set('per_page', perPage.toString())
        .set('user_id', user?.id.toString() )

    }).pipe(map(
      res => {
        console.log(res);


        this.setItems(res)
        const resp = res
        return resp;
      }
    ))
  }



  deleteOrder(id){
    return this.http.delete<Response>(`${environment.API}orders/${id}`).pipe(
      map( v => {
        // console.log(v.data);
        
        this.getOrders(1, 20, '', 'desc').pipe(take(1)).subscribe()
        //snacbarr
        this.openSnackBar('Eliminado correctamente','success-snack-bar')
        //////////
        return v.data
        
      })
    )
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
