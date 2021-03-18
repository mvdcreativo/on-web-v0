import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories: Observable<Category[]>;

  form :FormGroup
  send: Observable<string>;
  yearCopyright

  constructor(
    private categoryService: CategoriesService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.yearCopyright = moment().format('yyyy')
    
    this.form = this.fb.group({
      email: [null, Validators.required]
    })
    this.categories = this.categoryService.getCategories();
  }

  onSubmit(){
    this.send = this.http.post<string>(`${environment.API}add_email_newsletter`, this.form.value)
    .pipe(
      map(v=> {
        if(v === 'success'){
          this.form.reset()
          return "enviado"
        }
      })
    )
  }
  
}
