import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListPageComponent } from './courses-list-page/courses-list-page.component';
import { CoursesDetailsPageComponent } from './courses-details-page/courses-details-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListPageComponent,
    CoursesDetailsPageComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
