import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';

import { InstructorsComponent } from './instructors.component';

const routes: Routes = [
  { path: '', component: InstructorsComponent },
  { path: ':slug', component: InstructorDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
