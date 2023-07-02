import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() mode = 'local';
  @Input() user_id = 0;

  subscriptions: Subscription[] = [];

  postFetchSize = 20;
  allLoadedPosts: Post[] = [];
  skipPosts = 0;

  loading = true;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(event?: any) {
    this.loading = true;

    let olderTha = this.allLoadedPosts[this.allLoadedPosts.length-1]?.id;
    console.log(olderTha);

    if (this.mode === 'global') {
      this.subscriptions.push(this.apiService.getPublicTimeline(olderTha).subscribe((posts: Post[]) => {
        event?.target.complete();

        for (const post of posts) {
          this.allLoadedPosts.push(post);
        }

        this.loading = false;
      }));
    }

    if (this.mode === 'local') {
      this.subscriptions.push(this.apiService.getLocalTimeline(olderTha).subscribe((posts: Post[]) => {
        event?.target.complete();

        for (const post of posts) {
          this.allLoadedPosts.push(post);
        }

        this.loading = false;
      }));
    }

    if (this.mode === 'account') {
      this.subscriptions.push(this.apiService.getAccountStatuses(this.user_id, olderTha).subscribe((posts: Post[]) => {
        event?.target.complete();

        for (const post of posts) {
          this.allLoadedPosts.push(post);
        }

        this.loading = false;
      }));
    }

    this.skipPosts = this.skipPosts + this.postFetchSize;


  }

  loadData(event: any) {
    this.getPosts(event);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
