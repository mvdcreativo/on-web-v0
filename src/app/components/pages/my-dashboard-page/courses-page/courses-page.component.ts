import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ResponsePaginate } from 'src/app/interfaces/course';
import { Column } from 'src/app/shared/components/data-table/interfaces/table';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-couses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ////COLUMNAS TABLA
  public columns: Column[] = [
    // { title: 'ordenID', col: 'id' },
    { title: 'Curso', col: 'title' },
    { title: 'Inicio', col: 'date_ini', pipe: "dd/MM/yyyy" },

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

  constructor(
    private coursesService: CoursesService,
    public authService: AuthService,
    // private statusService: StatusService
  ) {
    
    this.result = this.coursesService.resultItems$

  }


  ngOnInit(): void {
    this.authService.currentUser
      .subscribe(res=>{ 
        this.user = res
        if (this.user) {
          this.getCourses(this.pageDefault, this.perPage, this.filter, this.orden)
          
        }
      })


    // this.getStatus()

  }


  paginatorChange(e: PageEvent) {
    console.log(e);
    this.getCourses(e.pageIndex + 1, e.pageSize)

  }



  getCourses(currentPage?, perPage?, filter?, sort?) {
    if (this.user) {
      this.subscriptions.push(
        this.coursesService.getCoursesUser(currentPage, perPage, filter, sort, this.user).subscribe(next => this.loadData())
      ) 
      
    }
  }

  loadData() {

    this.dataSource = this.result.pipe(map(v => {
      const dataTable = v.data.data.map(x => {
        return {
          id: x.id,
          title: x.title,
          date_ini:  x.date_ini,

        }
      })
      return dataTable;
    }))

    this.totalResut = this.result.pipe(map(v => v.data.total))
  }

  search(filter) {
    this.getCourses(this.pageDefault, this.perPage, filter, this.orden)
  }

  // deleteItem(id): Observable<any> {
  //   return this.coursesService.deleteCourse(id)
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
}
