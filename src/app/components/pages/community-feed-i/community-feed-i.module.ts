import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityFeedIRoutingModule } from './community-feed-i-routing.module';
import { CommunityFeedIComponent } from './community-feed-i.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CommunityFeedIComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommunityFeedIRoutingModule
  ]
})
export class CommunityFeedIModule { }
