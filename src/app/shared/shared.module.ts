import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunfactsComponent } from './components/funfacts/funfacts.component';
import { CategoriesStyleOneComponent } from './components/categories-style-one/categories-style-one.component';
import { HeaderComponent } from './components/header/header.component';
import { CoursesDestacComponent } from './components/courses-destac/courses-destac.component';
import { MaterialModule } from './material/material.module';
import { AuthModule } from '../auth/auth.module';
import { UserActionsComponent } from './components/header/user-actions/user-actions.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { CartComponent } from './components/cart-items/cart.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { DynamicPipePipe } from './pipes/dynamic-pipe.pipe';
import { DinamicFormComponent } from './components/dinamic-form/dinamic-form.component';
import { CourseItemCardComponent } from './components/course-item-card/course-item-card.component';



@NgModule({
  declarations: [
    MenuHorizontalComponent,
    DataTableComponent,
    UserActionsComponent,
    FunfactsComponent,
    CategoriesStyleOneComponent,
    HeaderComponent,
    CoursesDestacComponent,
    CourseItemComponent,
    PaymentFormComponent,
    CartComponent,
    DynamicPipePipe,
    DinamicFormComponent,
    CourseItemCardComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    ReactiveFormsModule,
    // FormsModule,
    MaterialModule,
    MatMomentDateModule,
    

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
    MaterialModule,
    CourseItemComponent,
    PaymentFormComponent,
    CartComponent,
    DataTableComponent,
    MatMomentDateModule,
    DynamicPipePipe,
    DinamicFormComponent,
    CourseItemCardComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
