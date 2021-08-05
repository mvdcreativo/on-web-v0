import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input()course : Course
  constructor() { }

  value_discount;

  ngOnInit(): void {
      this.value_discount = +this.course.price * +this.course.discount_uno / 100
      console.log(this.value_discount);

  }
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    // slidesPerView: 1,
    effect: 'fade',
    loopedSlides: 1,

};



  totalLessons(course: Course){
    const lessons = course.course_sections.map(l => l.lessons.length ? l.lessons.length : 0)
   return lessons.length >= 1 ? lessons?.reduce((contador, v) => contador + v) : 0
 }
}
