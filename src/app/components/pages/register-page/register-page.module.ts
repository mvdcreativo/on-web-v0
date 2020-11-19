import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    SharedModule
    
  ]
})
export class RegisterPageModule { }
