import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    private fb:FormBuilder
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
    
  }
}
