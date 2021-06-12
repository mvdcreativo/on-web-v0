import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { Category, Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';
import { environment } from 'src/environments/environment';
import { SeoService } from 'src/app/shared/seo/services/seo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Observable<Category[]>;
  coursesDestac$: Observable<Course[]>;
  categoriesConcat: string = null;

  constructor(
    private categoryService: CategoriesService,
    private courseService: CoursesService,
    private seoService: SeoService,

  ) { 
    
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories().pipe(map(v=>{
      this.categoriesConcat = v.map(x=>x.name).join(',');
      this.setSeo()
      return v
    }))
    this.getCoursesDestac()
  }

  getCoursesDestac(){
    this.coursesDestac$ = this.courseService.getCoursesDestac()
  }


  setSeo() {
    //////seo/////  
    if(this.categoriesConcat){
      this.seoService.genrateTags({
  
        title: `On Capacitaciones`,
        description: `Cursos y Oficios. Estudiar lo que te apasiona ahora es posible! ${this.categoriesConcat}`,
        slug: `/`,
      })
    }
    ////////////

  }
}
