import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, pipe} from 'rxjs';
import {HttpAuthService} from '../services/http/http-auth.service';
import {MessagesService} from '../services/messages.service';
import {map, tap} from 'rxjs/operators';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private pToken;

  constructor(private httpAuthService: HttpAuthService, private jwtHelperService: JwtHelperService,
              @Inject(MessagesService) private msgService: MessagesService, private pRouter: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.token = data.api_token;
    }
    if (this.token) {
      return true;
  }
    this.redirectAndLogin();
  }

  private redirectAndLogin() {
    this.msgService.loginWindowShow();
    this.Router.navigate(['/main']);
    return false;
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
}
