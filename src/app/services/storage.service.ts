import { Injectable } from '@angular/core';

const APPLICATION_KEY = 'app_2';
const TOKEN_KEY = 'token_2';
const ID_KEY = 'id_2';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setApplication(value: any): void {
    localStorage.setItem(APPLICATION_KEY, value);
  }

  getApplication(): string | null {
    return localStorage.getItem(APPLICATION_KEY);
  }

  removeApplication(): void {
    localStorage.removeItem(APPLICATION_KEY);
  }


  setToken(value: any): void {
    localStorage.setItem(TOKEN_KEY, value);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  setUserId(value: any): void {
    localStorage.setItem(ID_KEY, value);
  }

  getUserId(): string | null {
    return localStorage.getItem(ID_KEY);
  }

  removeUserId(): void {
    localStorage.removeItem(ID_KEY);
  }
}
