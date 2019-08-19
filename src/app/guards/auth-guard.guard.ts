import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpAuthService} from '../services/http/http-auth.service';
import {CookieService} from 'ngx-cookie-service';
import {MessagesService} from '../services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(@Inject(HttpAuthService) private httpAuthService: HttpAuthService,
              @Inject(MessagesService) private msgService: MessagesService,
              @Inject(CookieService) private cookieService: CookieService, private pRouter: Router) {
  }
  get Router(): Router {
    return this.pRouter;
  }

  set Router(value: Router) {
    this.pRouter = value;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.cookieService.get('api_token')) {
      if (this.isAdmin()) {
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

  private isAdmin() {
    return this.httpAuthService.isAdmin(this.cookieService.get('api_token')).subscribe(r => {
      return r;
    });
  }
}
