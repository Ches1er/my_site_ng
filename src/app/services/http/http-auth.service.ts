import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {UrlConfig} from '../../config/url-config';
import {CookieService} from 'ngx-cookie-service';
import {stringify} from 'querystring';
import {ResultResponse} from '../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient,
              @Inject(CookieService) private cookieService: CookieService) {
  }

  // LOGIN

  login(data: any): Observable<any> {
    if (data.rememberMe === '') { data.rememberMe = 0; }
    const params = new FormData();
    params.append('name', data.name);
    params.append('password', data.password);
    params.append('rememberMe', data.rememberMe);
    return this.http.post(this.urlConfig.LOGIN, params)
      .pipe(map(resp => resp));
  }

  loginByRememberMeToken(rememberToken: string): Observable<any> {
    const params = new FormData();
    params.append('remember_token', rememberToken);
    return this.http.post(this.urlConfig.LOGIN_REMEMBER, params)
      .pipe(map(resp => resp));
  }

  // GET USER & ROLES

  roles(token: string): Observable<any> {
    const params = new FormData();
    params.append('api_token', token);
    return this.http.post(this.urlConfig.ROLES, params)
      .pipe(map(roles => roles));
  }

  user(token: string): Observable<any> {
    const params = new FormData();
    params.append('api_token', token);
    return this.http.post(this.urlConfig.USER, params)
      .pipe(map(resp => resp));
  }
  isAdmin(apiToken: string): Observable<any> {
    const params = new FormData();
    params.append('api_token', apiToken);
    return this.http.post(this.urlConfig.IS_ADMIN, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }

  register(data: any): Observable<string> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('email', data.email);
    params.append('password', data.password);
    params.append('phones', data.phones.join(','));
    params.append('confirmedClient', data.confirmedClient);
    return this.http.post(this.urlConfig.REGISTER, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}

