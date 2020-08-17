import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    
  ],
  exports: [
    SwiperModule,
    MenuHorizontalComponent
  ]
})
export class SharedModule { }
