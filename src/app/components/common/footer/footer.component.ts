import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories: Observable<Category[]>;

  formFooter :FormGroup
  constructor(
    private categoryService: CategoriesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formFooter = this.fb.group({
      email: [null, Validators.required]
    })
    this.categories = this.categoryService.getCategories();
  }


}
