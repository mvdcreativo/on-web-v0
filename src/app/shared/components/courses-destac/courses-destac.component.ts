import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-courses-destac',
  templateUrl: './courses-destac.component.html',
  styleUrls: ['./courses-destac.component.scss']
})
export class CoursesDestacComponent implements OnInit {

  @Input() courses : Course[];
  constructor() { }

  ngOnInit(): void {
  }

  totalLessons(section: Course){
    const lessons = section.course_sections.map(l => l.lessons.length)
    return lessons.reduce((contador, v) => contador + v)
  }

}
