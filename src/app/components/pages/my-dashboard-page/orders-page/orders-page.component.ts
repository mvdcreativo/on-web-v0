import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ResponsePaginate } from 'src/app/interfaces/course';
import { Column } from 'src/app/shared/components/data-table/interfaces/table';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ////COLUMNAS TABLA
  public columns: Column[] = [
    { title: 'ordenID', col: 'id' },
    { title: 'Fecha', col: 'created_at', pipe: "dd/MM/yyyy" },
    { title: 'Total', col: 'total' },
    { title: 'Estado', col: 'status_mp' },

  ]

  dataSource: Observable<any[]>;

  ////paginator
  totalResut: Observable<number>;
  pageDefault = 1;
  perPage: number = 10;
  orden: string = 'desc';
  filter: string = '';
  result: Observable<ResponsePaginate>;
  subscriptions: Subscription[]=[];
  user: any;
  // statuses: OptionSelect[];

  // fields: Fields[]

  /////////////


  constructor(
    private ordersService: OrdersService,
    public authService: AuthService,
    // private statusService: StatusService
  ) {
    
    this.result = this.ordersService.resultItems$

  }


  ngOnInit(): void {
    this.authService.currentUser
      .subscribe(res=>{ 
        this.user = res
        if (this.user) {
          this.getOrders(this.pageDefault, this.perPage, this.filter, this.orden)
          
        }
      })


    // this.getStatus()

  }

  paginatorChange(e: PageEvent) {
    console.log(e);
    this.getOrders(e.pageIndex + 1, e.pageSize)

  }



  getOrders(currentPage?, perPage?, filter?, sort?) {
    if (this.user) {
      this.subscriptions.push(
        this.ordersService.getOrders(currentPage, perPage, filter, sort, this.user).subscribe(next => this.loadData())
      ) 
      
    }
  }

  loadData() {

    this.dataSource = this.result.pipe(map(v => {
      const dataTable = v.data.data.map(x => {
        return {
          id: x.id,
          created_at: x.created_at,
          total:  x.currency?.symbol+" "+x.total,
          status_mp: x.status_mp,

        }
      })
      return dataTable;
    }))

    this.totalResut = this.result.pipe(map(v => v.data.total))
  }

  search(filter) {
    this.getOrders(this.pageDefault, this.perPage, filter, this.orden)
  }

  // deleteItem(id): Observable<any> {
  //   return this.ordersService.deleteOrder(id)
  // }

  itemAction(event) {
    // console.log(event);

    // if (event.action === "delete") {
    //   this.deleteItem(event.element.id).pipe(take(1)).subscribe(res => console.log(res))
    // }

    // if (event.action === "edit") {
      
    //   this.openDialog(event.element)
    // }

  }



  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.map( v=> v.unsubscribe())
  }

  add(){
    
  }

  // openDialog(data?) {
    
  //   const dialogRef = this.dialog.open(ModalReutilComponent, {
  //     width: '850px',
  //     data: this.setFields(data)
  //   });

  //   return dialogRef.afterClosed().subscribe(result => {
  //     // this.animal = result;
  //     if(result){
  //       if (result.id) {
  //         this.updateOrder(result)
          
  //       }else{
  //         this.storeOrder(result)
  //       }

  //     }
      
  //   });
  // }


  // setFields(elementEdit? : Order) {
    
  //   const fields = [
  //     { nameControl: 'id', type: 'hidden', value: elementEdit?.id, label: 'Id' },
  //     { nameControl: 'name', type: 'text', value: elementEdit?.name, label: 'Nombre', validators: [Validators.required] },
  //     { nameControl: 'description', type: 'text', value: elementEdit?.description, label: 'Descripción' },
  //     { nameControl: 'status_id', type: 'select', value: elementEdit?.status_id, label: 'Estado', options: this.statuses, validators: [Validators.required] },
  //   ]

  //   return fields
  // }


  // getStatus(){
  //   this.statusService.getStatus("ALL").pipe(map(v=> {
  //     return v.map( o => { return { name: o.name, value: o.id}})
       
  //   }),take(1)).subscribe(res => this.statuses = res)

 
  // }

  // storeOrder(data){
  //   this.ordersService.storeOrder(data).pipe(take(1)).subscribe(
  //     res=> {
  //       console.log(res);
  //     }
  //   )
  // }

  // updateOrder(data){
  //   this.ordersService.updateOrder(data).pipe(take(1)).subscribe(
  //     res=> {
  //       console.log(res);        
  //     }
  //   )
  // }



}
