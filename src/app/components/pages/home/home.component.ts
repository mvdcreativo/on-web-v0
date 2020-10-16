import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { Category, Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Observable<Category[]>;
  coursesDestac$: Observable<Course[]>;

  constructor(
    private categoryService: CategoriesService,
    private courseService: CoursesService
  ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
    this.getCoursesDestac()
  }

  getCoursesDestac(){
    this.coursesDestac$ = this.courseService.getCoursesDestac()
  }
}
