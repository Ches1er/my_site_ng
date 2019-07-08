import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../config/url-config';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlConfig: UrlConfig = new UrlConfig();

  constructor(
    @Inject(HttpClient) private http: HttpClient) {
  }


}
