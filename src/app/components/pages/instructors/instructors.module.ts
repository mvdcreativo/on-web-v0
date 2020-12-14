import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './instructors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';


@NgModule({
  declarations: [
    InstructorsComponent,
    InstructorDetailComponent
  ],
  imports: [
    CommonModule,
    InstructorsRoutingModule,
    SharedModule
  ]
})
export class InstructorsModule { }
