import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalTimelinePageRoutingModule } from './local-timeline-routing.module';

import { LocalTimelinePage } from './local-timeline.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LocalTimelinePageRoutingModule
  ],
  declarations: [LocalTimelinePage]
})
export class LocalTimelinePageModule {}
