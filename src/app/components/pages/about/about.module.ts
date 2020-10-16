import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutSectionAComponent } from './about-section-a/about-section-a.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    AboutSectionAComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
  ],
  exports: [
    AboutSectionAComponent
  ]
})
export class AboutModule { }
