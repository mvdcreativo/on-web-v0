import { Component, OnInit, ɵɵcomponentHostSyntheticListener } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable, Subscription } from 'rxjs';
import { ResponseCourse, ResponseCourses, CourseSection, Course, Category, ResponsePaginate } from 'src/app/interfaces/course';
import { map, filter } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute, Params } from '@angular/router';
import { StylesService } from 'src/app/services/styles.service';

@Component({
  selector: 'app-courses-list-page',
  templateUrl: './courses-list-page.component.html',
  styleUrls: ['./courses-list-page.component.scss']
})
export class CoursesListPageComponent implements OnInit {
  courses$: Observable<Course[]>;
  categories$: Observable<Category[]>;
  hover: boolean = false
  course$: Observable<Course>;
  category$: Observable<Category>;
  coursesDestac$: Observable<Course[]>;
  subscription: Subscription;

  totalResut: Observable<number>;
  pageDefault = 1;
  perPage: number = 1000;
  orden: string = 'desc';
  filter: string = '';
  result: Observable<ResponsePaginate>;

  constructor(
    private coursesService: CoursesService,
    private categoriesService: CategoriesService,
   
    private activateRoute: ActivatedRoute,
    private styleService: StylesService
  ) { 
    this.result = this.coursesService.resultItems$

  }

  ngOnInit(): void {
    this.getCursos()

    this.categories$ = this.categoriesService.getCategories()
  }

  // calcLessons(courseSections: CourseSection[]){
  //   const lessons = courseSections.map( l => )
  //   return lessons.reduce((a, b) => a + b, 0);
  // }
  getProducts(currentPage?, perPage?, filter?, sort?) {
    this.subscription = this.coursesService.getProducts(currentPage, perPage, filter, sort).subscribe(next => this.loadData());
  }

  loadData() {
    this.courses$ = this.result.pipe(map(v => v.data.data))
    this.totalResut = this.result.pipe(map(v => v.data.total))
    this.coursesDestac$ = this.courses$.pipe(map( course => course.filter( c => c.status_id === 3)))

  }

  getCursos(){
    this.activateRoute.paramMap.subscribe(
      (params:Params) => {
        console.log(params.params);
        
        if(params.params.categorySlug){

          const slug = params.params.categorySlug;
          this.category$ = this.categoriesService.getCourseByCategorySlug(slug);
          this.styleService.getColorCtegory(this.category$)
            
          this.courses$ = this.category$.pipe(map(cat => cat.courses));
          this.coursesDestac$ = this.courses$.pipe(map( course => course.filter( c => c.status_id === 3)))

        }
        if(params.params.destacados){                      
          this.courses$ = this.coursesService.getCoursesDestac();
          this.coursesDestac$ =  this.courses$
        }
        if(params.params.search){
          const search = params.params.search;   
          this.getProducts(this.pageDefault, this.perPage, search, this.orden)

        }
        if(Object.keys(params.params).length === 0 ){
          
          this.getProducts(this.pageDefault, this.perPage, this.filter, this.orden)

        }
        
      }
      
    );
  }

  totalLessons(course: Course){
     const lessons = course.course_sections.map(l => l.lessons.length ? l.lessons.length : 0)
    return lessons.length >= 1 ? lessons?.reduce((contador, v) => contador + v) : 0
  }

  getCoursesDestac(){
    this.coursesDestac$ = this.coursesService.getCoursesDestac();
  }


}
