import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from 'src/app/interfaces/course';
import { map } from 'rxjs/operators';
import { StylesService } from 'src/app/services/styles.service';
import { CartService } from '../../cart-page/services/cart.service';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SeoService } from 'src/app/shared/seo/services/seo.service';
import { environment } from 'src/environments/environment';
import { animate } from '@angular/animations';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
declare let fbq: Function;//facebook pixel

@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit{
  course$: Observable<Course>;
  subscriptions: Subscription[] = []
  animate:boolean = false;
    value_discount: number;

  constructor(
    private activateRoute : ActivatedRoute,
    private courseService : CoursesService,
    private styleService : StylesService,
    private cartService: CartService,
    private router: Router,
    private seoService: SeoService,

    ) {
      fbq('track', 'ViewContent');
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
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (params:Params) => {
        const slug = params.params.slug;
        this.course$ = this.courseService.getCourseBySlug(slug);
        this.subscriptions.push(
          this.course$.subscribe(res=>{

            setTimeout(() => {
              this.animate = true
            }, 3000);
            this.setSeo(res)
          })
        );
        this.styleService.getColorCtegory(this.course$)

      }

    );


  }

  wsp(title){
    fbq('track', 'Lead');
    window.location.href = `https://wa.me/598092040486?text=Quiero%20consultar%20financiación%20mes%20a%20mes%20en%20la%20escuela%20para%20el%20curso%20${title}`
  }

  calcPriceDiscount(price, discount){
    const value_discount = +price * +discount / 100
    return price - value_discount;
  }

  pay(course){
    const item = this.cartService.addToCart(course,1)
    if (item !== false) {
      this.router.navigate(['/orden-de-compra'])
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.map(v=>v.unsubscribe())
  }


  setSeo(dataProduct:Course) {
    //////seo/////
    // console.log(dataProduct);

    let t: string = dataProduct.title;

    this.seoService.genrateTags({

      title: `${t}`,
      description: `Información del producto ${t}`,
      slug: `cursos/curso/${dataProduct.slug}`,
      category: dataProduct.categories[0].name,
      image: `${environment.urlImages}courses/larg/${dataProduct.image}`,
      amount: dataProduct.price,
      currency: "UYU",
      availability:"in stock",
      retailer_item_id: dataProduct.id.toString(),

    })
    ////////////

  }
}
