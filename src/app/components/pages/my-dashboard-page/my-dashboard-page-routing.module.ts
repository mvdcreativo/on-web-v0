import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAccountPageComponent } from './edit-account-page/edit-account-page.component';
import { MyDashboardPageComponent } from './my-dashboard-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';



const routes: Routes = [
  {
    path: '', component: MyDashboardPageComponent,
    children: [
      {path: '', component: OrdersPageComponent },
      {path: 'cursos', component: CoursesPageComponent },
      {path: 'pagos', component: OrdersPageComponent },
      {path: 'datos-personales', component: EditAccountPageComponent },
    ]
  },
  // {path: '', component: MyDashboardPageComponent },
  // {path: '', component: MyDashboardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDashboardPageRoutingModule { }
