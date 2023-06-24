import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalTimelinePageRoutingModule } from './global-timeline-routing.module';

import { GlobalTimelinePage } from './global-timeline.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GlobalTimelinePageRoutingModule
  ],
  declarations: [GlobalTimelinePage]
})
export class GlobalTimelinePageModule {}
