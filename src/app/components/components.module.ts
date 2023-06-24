import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgOptimizedImage
  ]
})
export class ComponentsModule { }
