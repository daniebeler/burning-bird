import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

const baseUrl = 'https://techhub.social/';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: any = [];

  constructor(private apiService: ApiService) {
    this.fief();

  }

  fief() {

    console.log('me')

    this.apiService.getPosts().subscribe((res) => {
      console.log(res)
      this.posts = res;
    })
  }

}
