import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable, Subscription } from 'rxjs';
import { Course, Category, ResponsePaginate } from 'src/app/interfaces/course';
import { map, filter } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute, Params } from '@angular/router';
import { StylesService } from 'src/app/services/styles.service';
import { SeoService } from 'src/app/shared/seo/services/seo.service';

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
  categoriesConcat: string;
  category: Category;
  coursesConcat: string;

  constructor(
    private coursesService: CoursesService,
    private categoriesService: CategoriesService,
    private seoService:SeoService,
    private activateRoute: ActivatedRoute,
    private styleService: StylesService
  ) { 
    this.result = this.coursesService.resultItems$

  }

  ngOnInit(): void {
    this.getCursos()

    this.categories$ = this.categoriesService.getCategories().pipe(map(v=>{
      this.categoriesConcat = v.map(x=>x.name).join(', ');
      return v
    }))
  }

  // calcLessons(courseSections: CourseSection[]){
  //   const lessons = courseSections.map( l => )
  //   return lessons.reduce((a, b) => a + b, 0);
  // }
  getProducts(currentPage?, perPage?, filter?, sort?) {
    this.subscription = this.coursesService.getProducts(currentPage, perPage, filter, sort).subscribe(next => this.loadData());
  }

  loadData() {
    this.courses$ = this.result.pipe(map(v => {
      this.coursesConcat = v.data.data.map(x=>x.title).join(', ');
      return v.data.data
    }))
    this.totalResut = this.result.pipe(map(v => v.data.total))
    this.coursesDestac$ = this.courses$.pipe(map( course => course.filter( c => c.status_id === 3)))

  }

  getCursos(){
    this.activateRoute.paramMap.subscribe(
      (params:Params) => {
        console.log(params.params);
        
        if(params.params.categorySlug){

          const slug = params.params.categorySlug;
          this.category$ = this.categoriesService.getCourseByCategorySlug(slug).pipe(map(v=>{
            this.category = v;
            
            return v
          }));
          this.styleService.getColorCtegory(this.category$)
            
          this.courses$ = this.category$.pipe(map(cat => {
            this.coursesConcat = cat.courses.map(x=>x.title).join(', ');
            this.setSeo()
            return cat.courses
          }));
          this.coursesDestac$ = this.courses$.pipe(map( course => course.filter( c => c.status_id === 3)))
          

        }
        if(params.params.destacados){                      
          this.courses$ = this.coursesService.getCoursesDestac().pipe(map(v=>{
            this.coursesConcat = v.map(x=>x.title).join(', ');
            this.setSeo('Destacados')
            return v;
          }));
          this.coursesDestac$ = this.courses$
          

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



  getCoursesDestac(){
    this.coursesDestac$ = this.coursesService.getCoursesDestac();
  }

  setSeo(title?) {
    //////seo/////
    

    if(this.categoriesConcat){
      this.seoService.genrateTags({
  
        title: title || this.category?.name || `Cursos`,
        description: `Cursos: ${this.coursesConcat}`,
        slug: this.category?.slug ? `/cursos/${this.category?.slug}` : `/cursos`,
      })
    }
    ////////////

  }
}
