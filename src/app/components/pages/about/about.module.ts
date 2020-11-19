import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutSectionAComponent } from './about-section-a/about-section-a.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OurStoryComponent } from './our-story/our-story.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutSectionAComponent,
    OurStoryComponent
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
