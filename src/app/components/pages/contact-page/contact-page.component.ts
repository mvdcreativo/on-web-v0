import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  message: Observable<string>;

  constructor(
    private fb:FormBuilder,
    private contactService: ContactService

  ) { 
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
        return "Gracias!!!. Nos comunicaremos contigo dentro de las próximas 24hs."
      }else{

        return v
      }
    })
    )
  }
}
