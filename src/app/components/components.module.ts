import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    PostComponent,
    SidebarComponent,
    PostsComponent
  ],
  exports: [
    PostComponent,
    SidebarComponent,
    PostsComponent
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
