import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTimelinePageRoutingModule } from './home-timeline-routing.module';

import { HomeTimelinePage } from './home-timeline.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomeTimelinePageRoutingModule
  ],
  declarations: [HomeTimelinePage]
})
export class HomeTimelinePageModule {}
