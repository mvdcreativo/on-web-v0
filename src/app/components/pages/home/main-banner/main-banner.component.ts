import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {

  imagesBanner = [
    { src: "assets/img/banner/01.jpg", text: "" },
    { src: "assets/img/banner/02.jpg", text: "" },
    { src: "assets/img/banner/03.jpg", text: "" },
    { src: "assets/img/banner/04.jpg", text: "" },
    { src: "assets/img/banner/05.jpg", text: "" },
    { src: "assets/img/banner/06.jpg", text: "" },
  ]


  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    // slidesPerView: 1,
    effect: 'fade',
    loopedSlides: 1,

  };
}
