import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject<boolean>(null);

  constructor(
    private storageService: StorageService,
    private apiService: ApiService,
    private userService: UserService
  ) {
    this.checkToken()
  }


  checkToken() {
    if (this.storageService.getToken()) {
      this.apiService.verifyCredentials().subscribe(resp => {
        console.log('Verified', resp)

        if (resp.id) {
          this.storageService.setUserId(resp.id)
          this.userService.fetchUserFromApi();
          console.log('ID', this.storageService.getUserId())
          this.authenticationState.next(true);
        } else {
          this.authenticationState.next(false);
        }
      })
    } else {
      this.authenticationState.next(false)
    }

  }
}
