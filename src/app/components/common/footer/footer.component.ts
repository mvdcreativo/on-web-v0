import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/course';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories: Observable<Category[]>;

  constructor(
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }


}
