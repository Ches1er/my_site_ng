import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient, HttpUrlEncodingCodec} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../../../dto/news/News';
import {NewsResponse} from '../../../dto/news/NewsResponse';
import {map} from 'rxjs/operators';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpNewsService {

  urlConfig: UrlConfig = new UrlConfig();
  urlEncode = new HttpUrlEncodingCodec();

  constructor(
    @Inject(HttpClient) private http: HttpClient, private cookieService: CookieService) {
  }

  get allNews(): Observable<Array<News>> {
    return this.http.get(this.urlConfig.ALL_NEWS)
      .pipe(map(resp => NewsResponse.fromJson(resp)))
      .pipe(map(newsResponse => newsResponse.data));
  }

  get packNews(): Observable<Array<News>> {
    return this.http.get(this.urlConfig.PACK_NEWS)
      .pipe(map(resp => NewsResponse.fromJson(resp)))
      .pipe(map(newsResponse => newsResponse.data));
  }

  get buildingNews(): Observable<Array<News>> {
    return this.http.get(this.urlConfig.BUILDING_NEWS)
      .pipe(map(resp => NewsResponse.fromJson(resp)))
      .pipe(map(newsResponse => newsResponse.data));
  }
  findNews(findData: string): Observable<Array<News>> {
    const params = new FormData();
    params.append('findData', findData);
    return this.http.post(this.urlConfig.FIND_NEWS, params)
      .pipe(map(resp => NewsResponse.fromJson(resp)))
      .pipe(map(newsResponse => newsResponse.data));
  }

  private getApiToken(): any {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      return data.api_token;
    }
    return false;
  }

  addNews(data: any, action: string): Observable<any> {
    const params = new FormData();
    params.append('api_token', this.getApiToken());
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('short_news', this.urlEncode.encodeValue(data.short_news));
    params.append('full_news', this.urlEncode.encodeValue(data.full_news));
    params.append('img', data.img);
    params.append('salesArea', data.salesArea);
    return this.http.post(this.urlConfig.ADD_NEWS, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}
