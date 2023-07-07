import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.authenticationState.pipe(
      filter(val => val !== null),
      take(1),
      map(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['']);
          return false;
        }
        else {
          return true;
        }
      })
    );
  }

}
