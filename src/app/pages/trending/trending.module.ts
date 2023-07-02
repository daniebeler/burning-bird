import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendingPageRoutingModule } from './trending-routing.module';

import { TrendingPage } from './trending.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [TrendingPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TrendingPageRoutingModule,
        ComponentsModule
    ]
})
export class TrendingPageModule {}
