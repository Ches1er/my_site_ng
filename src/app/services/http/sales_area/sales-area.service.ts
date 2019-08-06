import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {SalesArea} from '../../../dto/sales-area/Sales-area';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SalesAreaResponse} from '../../../dto/sales-area/Sales-area Response';

@Injectable({
  providedIn: 'root'
})
export class SalesAreaService {
  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  getSalesAreas(): Observable<Array<SalesArea>> {
    return this.http.get(this.urlConfig.SALES_AREA)
      .pipe(map(resp => SalesAreaResponse.fromJson(resp)))
      .pipe(map(resp => resp.data));
  }

  getSalesArea(id: number): Observable<SalesArea> {
    return this.http.get(this.urlConfig.SALES_AREA + id)
      .pipe(map(resp => SalesArea.fromJson(resp)));
  }
}
