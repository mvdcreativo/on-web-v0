import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesDetailsPageComponent } from './courses-details-page/courses-details-page.component';
import { CoursesListPageComponent } from './courses-list-page/courses-list-page.component';

import { CoursesComponent } from './courses.component';

const routes: Routes = [
    {path: '', component: CoursesListPageComponent},
    {path: 'destacados/:destacados', component: CoursesListPageComponent},
    {path: ':categorySlug', component: CoursesListPageComponent},
    {path: 'buscar/cursos/:search', component: CoursesListPageComponent},
    {path: 'curso/:slug', component: CoursesDetailsPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
