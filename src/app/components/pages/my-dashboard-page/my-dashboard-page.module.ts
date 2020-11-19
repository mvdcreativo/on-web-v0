import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDashboardPageRoutingModule } from './my-dashboard-page-routing.module';
import { MyDashboardPageComponent } from './my-dashboard-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditAccountPageComponent } from './edit-account-page/edit-account-page.component';
import { EditBillingAddressPageComponent } from './edit-billing-address-page/edit-billing-address-page.component';
import { EditAddressPageComponent } from './edit-address-page/edit-address-page.component';
import { EditShippingAddressPageComponent } from './edit-shipping-address-page/edit-shipping-address-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';


@NgModule({
  declarations: [
    MyDashboardPageComponent,
    EditAccountPageComponent,
    EditBillingAddressPageComponent,
    EditAddressPageComponent,
    EditShippingAddressPageComponent,
    OrdersPageComponent,
    NavigationComponent,
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    MyDashboardPageRoutingModule,
    SharedModule
  ]
})
export class MyDashboardPageModule { }
