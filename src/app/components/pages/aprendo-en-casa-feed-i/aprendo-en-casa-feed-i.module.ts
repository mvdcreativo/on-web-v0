import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendoEnCasaFeedIRoutingModule } from './aprendo-en-casa-feed-i-routing.module';
import { AprendoEnCasaFeedIComponent } from './aprendo-en-casa-feed-i.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AprendoEnCasaFeedIComponent],
  imports: [
    CommonModule,
    AprendoEnCasaFeedIRoutingModule,
    SharedModule
  ]
})
export class AprendoEnCasaFeedIModule { }
