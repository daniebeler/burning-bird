import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post!: Post;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  openProfile(acct: string) {
    this.router.navigate(['/profile/' + acct]);
  }

}
