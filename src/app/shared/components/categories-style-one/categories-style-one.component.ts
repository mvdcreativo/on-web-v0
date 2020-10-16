import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/course';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-categories-style-one',
  templateUrl: './categories-style-one.component.html',
  styleUrls: ['./categories-style-one.component.scss']
})
export class CategoriesStyleOneComponent implements OnInit {

  hover : boolean = false;
  @Input()categories : Category[] = []

  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1.3,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    autoplay:true,
    // zoom:true,
    // watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    // pagination: false,
    // centeredSlides: true,
    // loop: true,
    // roundLengths: true,
    // slidesOffsetBefore: 100,
    // slidesOffsetAfter: 100,
    spaceBetween: 50,
    breakpoints: {
        // when window width is >= 320px
        520: {
            slidesPerView: 2,
            autoplay:true,
            // slidesOffsetBefore: 100,
        },
        770: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        }
    }
};

  constructor() { }

  ngOnInit(): void {
  }



}
