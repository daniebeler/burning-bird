import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';

@NgModule({
  declarations: [
    PostComponent,
    SidebarComponent,
    PostsComponent,
    TimeAgoPipe
  ],
  exports: [
    PostComponent,
    SidebarComponent,
    PostsComponent,
    TimeAgoPipe
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
