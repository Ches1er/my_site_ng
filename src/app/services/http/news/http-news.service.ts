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

  get packNews(): Observable<Array<News>> {
    return this.http.get(this.urlConfig.PACK_NEWS)
      .pipe(map(resp => NewsResponse.fromJson(resp)))
      .pipe(map(newsResponse => newsResponse.data ));
  }
  get buildingNews(): Observable<Array<News>> {
    return this.http.get(this.urlConfig.BUILDING_NEWS)
      .pipe(map(resp => NewsResponse.fromJson(resp)))
      .pipe(map(newsResponse => newsResponse.data ));
  }
}
