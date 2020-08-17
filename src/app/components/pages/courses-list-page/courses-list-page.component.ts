import { Component, OnInit, ɵɵcomponentHostSyntheticListener } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable } from 'rxjs';
import { ResponseCourse, ResponseCourses, CourseSection, Course, Category } from 'src/app/interfaces/course';
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

  constructor(
    private coursesService: CoursesService,
    private categoriesService: CategoriesService,
    private courseService: CoursesService,
    private activateRoute: ActivatedRoute,
    private styleService: StylesService
  ) { }

  ngOnInit(): void {

    this.getCursos()
    this.categories$ = this.categoriesService.getCategories()
  }

  // calcLessons(courseSections: CourseSection[]){
  //   const lessons = courseSections.map( l => )
  //   return lessons.reduce((a, b) => a + b, 0);
  // }

  getCursos(){
    this.activateRoute.paramMap.subscribe(
      (params:Params) => {
        if(params.params.categorySlug){

          const slug = params.params.categorySlug;
          this.category$ = this.categoriesService.getCourseByCategorySlug(slug);
          this.styleService.getColorCtegory(this.category$)
            
          this.courses$ = this.category$.pipe(map(cat => cat.courses));
          this.coursesDestac$ = this.courses$.pipe(map( course => course.filter( c => c.status_id === 3)))

        }else{

          this.courses$ = this.coursesService.getCourses()
          this.coursesDestac$ = this.courses$.pipe(map( course => course.filter( c => c.status_id === 3)))

        }
        
      }
      
    );
  }

  totalLessons(section: Course){
     const lessons = section.course_sections.map(l => l.lessons.length)
    return lessons.reduce((contador, v) => contador + v)
  }

  getCoursesDestac(){
    this.coursesDestac$ = this.courseService.getCoursesDestac();
  }
}
