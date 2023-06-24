import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalTimelinePage } from './local-timeline.page';

const routes: Routes = [
  {
    path: '',
    component: LocalTimelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalTimelinePageRoutingModule {}
