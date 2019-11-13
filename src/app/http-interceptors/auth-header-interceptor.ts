import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {UrlConfig} from '../config/url-config';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
  private pToken;
  private urlConfig = new UrlConfig();

  constructor(private jwtHelperService: JwtHelperService) {
  }
  get token() {
    return this.pToken;
  }
  set token(value) {
    this.pToken = value;
  }
  private hasToken(): boolean {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.token = data.api_token;
      return true;
    }
    return false;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userLoggedIn = this.hasToken();
    const isApiUrl = req.url.startsWith(this.urlConfig.CORE);
    if (userLoggedIn && isApiUrl) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      headers.set('withCredentials', 'true');
      req = req.clone({headers});
    }
    return next.handle(req);
  }

}
