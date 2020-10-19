import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunfactsComponent } from './components/funfacts/funfacts.component';
import { CategoriesStyleOneComponent } from './components/categories-style-one/categories-style-one.component';
import { HeaderComponent } from './components/header/header.component';
import { CoursesDestacComponent } from './components/courses-destac/courses-destac.component';
import { TmNgOdometerModule } from 'tm-ng-odometer';


@NgModule({
  declarations: [
    MenuHorizontalComponent,
    FunfactsComponent,
    CategoriesStyleOneComponent,
    HeaderComponent,
    CoursesDestacComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    TmNgOdometerModule
    
  ],
  exports: [
    SwiperModule,
    MenuHorizontalComponent,
    ReactiveFormsModule,
    FormsModule,
    FunfactsComponent,
    CategoriesStyleOneComponent,
    HeaderComponent,
    CoursesDestacComponent,
    TmNgOdometerModule
  ]
})
export class SharedModule { }
