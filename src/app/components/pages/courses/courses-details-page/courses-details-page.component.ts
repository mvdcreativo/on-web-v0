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
