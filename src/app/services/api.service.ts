import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostAdapter } from '../adapter/post-adapter';
import { Observable, concatMap, of, map } from 'rxjs';
import { Post } from '../models/post';

const baseUrl = 'https://techhub.social/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private postAdapter: PostAdapter
    ) { }


  getPosts(): Observable<Post[]> {
    return this.httpClient.get<any>(baseUrl + 'api/v1/timelines/public').pipe(
      map((res: any) => res.map((item: any) => this.postAdapter.adapt(item)))
    );
  }
}
