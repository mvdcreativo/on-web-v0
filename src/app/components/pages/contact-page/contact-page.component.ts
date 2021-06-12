import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/seo/services/seo.service';
import { ContactService } from './contact.service';
declare let fbq: Function;//facebook pixel

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  message: Observable<string>;

  constructor(
    private fb:FormBuilder,
    private contactService: ContactService,
    private seoService:SeoService
  ) { 
    this.setSeo()
    this.formContact= this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      // subject: [null, Validators.required],
      message: [null, Validators.required],
    })
  }
  formContact : FormGroup;

  ngOnInit(): void {
  }

  onSubmit(){
    this.message = this.contactService.sendMailContact(this.formContact.value).pipe(map(v =>{
      this.formContact.reset()
      if( v === 'success') {
        fbq('track', 'Contact');
        return "Gracias!!!. Nos comunicaremos contigo dentro de las próximas 24hs."
      }else{

        return v
      }
    })
    )
  }

  setSeo() {
    //////seo/////  

    this.seoService.genrateTags({

      title: `Contacto`,
      description: `E-mail: cursos@oncapacitaciones.com. Nuestra Ubicación: Av. Giannattasio Km 18.200 M.G S.102 entre Siena y Padua. Llamanos: (+598) 2681 8368. Es muy simple llegar desde donde estés.`,
      slug: `/contacto`,

    })
    ////////////
  }
}
