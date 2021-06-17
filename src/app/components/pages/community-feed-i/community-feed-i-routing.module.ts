import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityFeedIComponent } from './community-feed-i.component';

const routes: Routes = [{ path: '', component: CommunityFeedIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityFeedIRoutingModule { }
