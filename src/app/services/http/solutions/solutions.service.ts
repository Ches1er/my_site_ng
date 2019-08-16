import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ObserveOnMessage} from 'rxjs/internal/operators/observeOn';
import {Observable} from 'rxjs';
import {Solution} from '../../../dto/solutions/Solution';
import {UrlConfig} from '../../../config/url-config';
import {map} from 'rxjs/operators';
import {SolutionsResponse} from '../../../dto/solutions/SolutionsResponse';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {
  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  get solutions(): Observable<Array<Solution>> {
    return this.http.get(this.urlConfig.SHOW_SOLUTIONS)
      .pipe(map(resp => SolutionsResponse.fromJson(resp)))
      .pipe(map(sr => sr.data));
  }
}
