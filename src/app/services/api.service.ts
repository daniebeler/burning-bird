import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostAdapter } from '../adapter/post-adapter';
import { Observable, map } from 'rxjs';
import { Post } from '../models/post';
import { Account } from '../models/account';
import { AccountAdapter } from '../adapter/account-adapter';
import { StorageService } from './storage.service';

const baseUrl = 'https://techhub.social/';

const clientName = 'Cuckoo.Plus'
const scopes = 'read write follow'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private postAdapter: PostAdapter,
    private accountAdapter: AccountAdapter,
    private storageService: StorageService
    ) { }


    getHeader(): HttpHeaders {

      const token = this.storageService.getToken();
      console.log(token)
      if (token) {
        return new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: 'Bearer ' + token
        });
      }

      return null;
    }

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

  getTrendingStatuses(offset: number): Observable<Post[]> {
    return this.httpClient.get<any>(baseUrl + 'api/v1/trends/statuses?offset=' + offset).pipe(
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


  registerApplication(): Observable<any> {
    const formData = {
      client_name: clientName,
      redirect_uris: 'http://localhost:8100/login',
      scopes: scopes
    }

    return this.httpClient.post<any>(baseUrl + 'api/v1/apps', formData);
  }

  authorizeUser() {

    const token = JSON.parse(this.storageService.getApplication());


    const query = 'client_id=' + token.client_id + '&redirect_uri=' + token.redirect_uri;

    let url = baseUrl + 'oauth/authorize?response_type=code&' + query;

    window.open(url)

    // return this.httpClient.get<any>(baseUrl + 'oauth/authorize?response_type=code&' + query);
  }

  obtainToken(authorizationCode: string) {
    const appl = JSON.parse(this.storageService.getApplication());

    const formData = {
      grant_type: 'authorization_code',
      code: authorizationCode,
      client_id: appl.client_id,
      client_secret: appl.client_secret,
      redirect_uri: appl.redirect_uri
    }

    return this.httpClient.post<any>(baseUrl + 'oauth/token', formData);
  }

  verifyCredentials(): Observable<any> {

    const headers: HttpHeaders = this.getHeader();

    console.log('Headers: ' + headers)
    console.log()

    return this.httpClient.get<any>(baseUrl + 'api/v1/apps/verify_credentials',  {headers});
  }
}
