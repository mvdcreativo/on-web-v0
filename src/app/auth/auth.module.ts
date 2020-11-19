import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
// import { ModalAuthComponent } from './modal-auth/modal-auth.component';
import { AccessComponent } from './access/access.component';
import { ResetPassDielogComponent } from './access/reset-pass-dielog/reset-pass-dielog.component';
import { NewPassDilogComponent } from './access/new-pass-dilog/new-pass-dilog.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    // ModalAuthComponent,
    AccessComponent,
    ResetPassDielogComponent,
    NewPassDilogComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
  ],
  entryComponents: [
    // ModalAuthComponent
  ]
})
export class AuthModule { }
