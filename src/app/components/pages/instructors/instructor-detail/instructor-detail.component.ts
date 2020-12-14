import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/interfaces/course';
import { Instructor } from '../interfaces/instructor';
import { InstructorService } from '../services/instructor.service';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.scss']
})
export class InstructorDetailComponent implements OnInit {
  slug: string;
  instructor: Observable<Instructor>;
  courses: Observable<Course[]>;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(
      (params: Params)=>{
        if (params) {
          this.slug = params.params.slug;
          this.instructor = this.instructorService.getInstructor(this.slug)
          .pipe(
            map(v=>{
              this.courses = this.instructorService.getInstructorCourses(v.data.id).pipe(map(x=>x.data))
              return v.data
            }
          ))
        }
      }
    )
  }

}
