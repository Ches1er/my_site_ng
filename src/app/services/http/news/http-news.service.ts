import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../../../dto/news/News';
import {NewsResponse} from '../../../dto/news/NewsResponse';
import {map} from 'rxjs/operators';

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

  addNews(data: any): Observable<any> {
    console.log('hello');
    const params = new FormData();
    params.append('name', data.name);
    params.append('short_news', data.short_news);
    params.append('full_news', data.full_news);
    params.append('img', data.img);
    params.append('salesArea', data.salesArea);
    console.log(this.urlConfig.ADD_NEWS);
    return this.http.post(this.urlConfig.ADD_NEWS, params)
      .pipe(map(resp => resp));
  }
}
