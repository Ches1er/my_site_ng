import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../../../dto/news/News';
import {NewsResponse} from '../../../dto/news/NewsResponse';
import {map} from 'rxjs/operators';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpNewsService {

  urlConfig: UrlConfig = new UrlConfig();

  constructor(
    @Inject(HttpClient) private http: HttpClient) {
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

  addNews(data: any, action: string): Observable<any> {
    const params = new FormData();
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('short_news', data.short_news);
    params.append('full_news', data.full_news);
    params.append('img', data.img);
    params.append('salesArea', data.salesArea);
    return this.http.post(this.urlConfig.ADD_NEWS, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
/*  addNews(data: any, action: string): Observable<any> {
    console.log(data);
    console.log(action);
  }*/
}
