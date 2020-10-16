import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutModule } from '../about/about.module';


@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AboutModule
  ]
})
export class HomeModule { }
