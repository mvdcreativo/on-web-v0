import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from 'src/app/interfaces/course';
import { map } from 'rxjs/operators';
import { StylesService } from 'src/app/services/styles.service';

@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit{
  course$: Observable<Course>;

  constructor(
    private activateRoute : ActivatedRoute,
    private courseService : CoursesService,
    private styleService : StylesService
    ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (params:Params) => {
        const slug = params.params.slug;
        this.course$ = this.courseService.getCourseBySlug(slug);
        this.styleService.getColorCtegory(this.course$)
        
      }
      
    );

    
  }


}
