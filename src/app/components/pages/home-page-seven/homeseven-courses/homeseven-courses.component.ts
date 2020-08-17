import { Component, OnInit, Input } from '@angular/core';
import { CoursesDetailsPageComponent } from '../../courses-details-page/courses-details-page.component';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-homeseven-courses',
  templateUrl: './homeseven-courses.component.html',
  styleUrls: ['./homeseven-courses.component.scss']
})
export class HomesevenCoursesComponent implements OnInit {

  @Input() courses : Course[];
  constructor() { }

  ngOnInit(): void {
  }

  totalLessons(section: Course){
    const lessons = section.course_sections.map(l => l.lessons.length)
    return lessons.reduce((contador, v) => contador + v)
  }

}
