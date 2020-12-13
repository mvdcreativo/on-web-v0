import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutPageRoutingModule } from './checkout-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutPageComponent } from './checkout-page.component';
import { DialogCuposComponent } from './dialog-cupos/dialog-cupos.component';


@NgModule({
  declarations: [
    CheckoutPageComponent,
    DialogCuposComponent
  ],
  imports: [
    CommonModule,
    CheckoutPageRoutingModule,
    SharedModule
  ]
})
export class CheckoutPageModule { }
