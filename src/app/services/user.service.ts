import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject<Account>(null);

  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) { }

  getLatestUser(): Observable<Account> {
    return this.user;
  }

  fetchUserFromApi(): void {
    const id = this.storageService.getUserId()
    if (id) {
      this.apiService.getAccountById(id).subscribe(user => {
        this.user.next(user);
      });
    }
  }

  clearData(): void {
    this.user.next(null);
  }
}
