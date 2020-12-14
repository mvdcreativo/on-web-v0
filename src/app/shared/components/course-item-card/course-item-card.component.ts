import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-course-item-card',
  templateUrl: './course-item-card.component.html',
  styleUrls: ['./course-item-card.component.scss']
})
export class CourseItemCardComponent implements OnInit {

  @Input()course : Course
  constructor() { }

  ngOnInit(): void {
  }


  totalLessons(course: Course){
    const lessons = course.course_sections.map(l => l.lessons.length ? l.lessons.length : 0)
   return lessons.length >= 1 ? lessons?.reduce((contador, v) => contador + v) : 0
 }
}
