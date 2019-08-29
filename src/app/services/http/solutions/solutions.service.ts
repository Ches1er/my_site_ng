import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Solution} from '../../../dto/solutions/Solution';
import {UrlConfig} from '../../../config/url-config';
import {map} from 'rxjs/operators';
import {SolutionsResponse} from '../../../dto/solutions/SolutionsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

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
  private getApiToken(): any {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      return data.api_token;
    }
    return false;
  }
  addSolution(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('api_token', this.getApiToken());
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('desc', data.desc);
    params.append('img', data.img);
    // params.append('imgId', data.imgId);
    params.append('products', data.products.join(','));
    params.append('items', data.items.join(';'));
    return this.http.post(this.urlConfig.ADD_SOLUTION, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}
