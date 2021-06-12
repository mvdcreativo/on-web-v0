import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/seo/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { 
    this.setSeo()
  }

  ngOnInit(): void {
  }

  setSeo() {
    //////seo/////  

    this.seoService.genrateTags({

      title: `Nosotros`,
      description: `Te apoyaremos con nuestro staff de educadores y nuestras instalaciones están a tú disposición. Ofrecemos a los alumnos la oportunidad de transformar su realidad y la de sus familias. Queremos formar a los emprendedores del mañana`,
      slug: `/nosotros`,

    })
    ////////////
  }

}
