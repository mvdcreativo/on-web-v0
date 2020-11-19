import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CartPageComponent,
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    SharedModule
  ]
})
export class CartPageModule { }
