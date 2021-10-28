import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (!localStorage.getItem("username") || localStorage.getItem("username") == "undefined") {
    // this.router.navigateByUrl('auth/login?returnUrl=' + state.url.toString());
    // this.router.navigateByUrl('/');
    // }

    if (!this.auth.isLoggedIn) {
      alert('You must be logged in to access this page');
      this.router.navigateByUrl('/login');
    }
    return true;
  }

}
