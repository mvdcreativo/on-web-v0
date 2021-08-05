import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs';
import { BannerService } from './banner.service';
import { Image } from "./interface/image";


@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {

  imagesBanner : Observable<Image[]>;


  constructor(
    private bannerServices: BannerService,
  ) { }

  ngOnInit(): void {
    this.imagesBanner = this.bannerServices.getCarousel()
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
