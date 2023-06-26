import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostAdapter } from '../adapter/post-adapter';
import { Observable, concatMap, of, map } from 'rxjs';
import { Post } from '../models/post';
import { Account } from '../models/account';
import { AccountAdapter } from '../adapter/account-adapter';

const baseUrl = 'https://techhub.social/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private postAdapter: PostAdapter,
    private accountAdapter: AccountAdapter
    ) { }


  getPublicTimeline(): Observable<Post[]> {
    return this.httpClient.get<any>(baseUrl + 'api/v1/timelines/public').pipe(
      map((res: any) => res.map((item: any) => this.postAdapter.adapt(item)))
    );
  }

  getLocalTimeline(): Observable<Post[]> {
    return this.httpClient.get<any>(baseUrl + 'api/v1/timelines/public?local=true').pipe(
      map((res: any) => res.map((item: any) => this.postAdapter.adapt(item)))
    );
  }

  getAccount(acct: string): Observable<Account> {
    return this.httpClient.get<any>(baseUrl + 'api/v1/accounts/lookup?acct=' + acct).pipe(
      map((item: any) => this.accountAdapter.adapt(item))
    );
  }
}
