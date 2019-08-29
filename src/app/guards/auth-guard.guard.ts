import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpAuthService} from '../services/http/http-auth.service';
import {MessagesService} from '../services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  private pToken;
  constructor(@Inject(HttpAuthService) private httpAuthService: HttpAuthService,
              @Inject(MessagesService) private msgService: MessagesService, private pRouter: Router) {
  }
  get Router(): Router {
    return this.pRouter;
  }
  get token() {
    return this.pToken;
  }

  set token(value) {
    this.pToken = value;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.token = data.api_token;
    }
    if (this.token) {
      if (this.isAuth()) {
        return true;
      }
      this.msgService.loginWindowShow();
      this.Router.navigate(['/main']);
      return false;
    }
    this.msgService.loginWindowShow();
    this.Router.navigate(['/main']);
    return false;
  }

  private isAuth() {
    return this.httpAuthService.user(this.token).subscribe(u => {
      if (u) { return true; }
    });
  }
}
