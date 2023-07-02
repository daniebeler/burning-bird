import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostAdapter } from '../adapter/post-adapter';
import { Observable, map } from 'rxjs';
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


  getPublicTimeline(olderThan?: number): Observable<Post[]> {
    let olderThanQuery = ''
    if (olderThan) {
      olderThanQuery = '?max_id=' + olderThan;
    }

    return this.httpClient.get<any>(baseUrl + 'api/v1/timelines/public' + olderThanQuery).pipe(
      map((res: any) => res.map((item: any) => this.postAdapter.adapt(item)))
    );
  }

  getLocalTimeline(olderThan?: number): Observable<Post[]> {
    let olderThanQuery = ''
    if (olderThan) {
      olderThanQuery = '&max_id=' + olderThan;
    }

    return this.httpClient.get<any>(baseUrl + 'api/v1/timelines/public?local=true' + olderThanQuery).pipe(
      map((res: any) => res.map((item: any) => this.postAdapter.adapt(item)))
    );
  }

  getAccountStatuses(accountId: number, olderThan?: number): Observable<Post[]> {
    let olderThanQuery = ''
    if (olderThan) {
      olderThanQuery = '?max_id=' + olderThan;
    }

    return this.httpClient.get<any>(baseUrl + 'api/v1/accounts/' + accountId + '/statuses' + olderThanQuery).pipe(
      map((res: any) => res.map((item: any) => this.postAdapter.adapt(item)))
    );
  }

  getAccount(acct: string): Observable<Account> {
    return this.httpClient.get<any>(baseUrl + 'api/v1/accounts/lookup?acct=' + acct).pipe(
      map((item: any) => this.accountAdapter.adapt(item))
    );
  }
}
