import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {MessagesService} from '../services/messages.service';
import {HttpAuthService} from '../services/http/http-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  private pToken;

  constructor(private httpAuthService: HttpAuthService, private jwtHelperService: JwtHelperService,
              @Inject(MessagesService) private msgService: MessagesService, private pRouter: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole: Array<string> = route.data.expectedRole;
    if (this.hasToken()) {
      if (this.checkRoles(expectedRole, this.jwtHelperService.decodeToken(this.token).roles)) {
        return true;
      }
      this.redirectAndLogin();
    }
    this.redirectAndLogin();
  }

  private hasToken(): boolean {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.token = data.api_token;
      return true;
    }
    return false;
  }

  private checkRoles(expectedRoles: Array<string>, userRoles: Array<string>): boolean {
    let result = false;
    expectedRoles.map(e => {
      if (userRoles.includes(e)) {
        result = true;
      }
    });
    return result;
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
