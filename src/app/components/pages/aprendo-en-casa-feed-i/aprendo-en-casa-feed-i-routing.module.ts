import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprendoEnCasaFeedIComponent } from './aprendo-en-casa-feed-i.component';

const routes: Routes = [{ path: '', component: AprendoEnCasaFeedIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendoEnCasaFeedIRoutingModule { }
