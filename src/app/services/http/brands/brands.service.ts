import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Brand} from '../../../dto/Brand/Brand';
import {BrandsResponse} from '../../../dto/Brand/BrandsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  urlConfig: UrlConfig = new UrlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get packBrands(): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.SHOW_PACK_BRANDS)
      .pipe(map(resp => BrandsResponse.fromJson(resp)))
      .pipe(map(brandResponse => brandResponse.data));
  }
  get buildBrands(): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.SHOW_BUILDING_BRANDS)
      .pipe(map(resp => BrandsResponse.fromJson(resp)))
      .pipe(map(brandResponse => brandResponse.data));
  }
  get allBrands(): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.SHOW_ALL_BRANDS)
      .pipe(map(resp => BrandsResponse.fromJson(resp)))
      .pipe(map(brandResponse => brandResponse.data));
  }
  add(data: any, action: string): Observable<string> {
    console.log(data);
    console.log(action);
    const params = new FormData();
    params.append('name', data.name);
    params.append('sales_area', data.salesArea);
    params.append('id', data.id);
    params.append('action', action);
    params.append('active', data.active);
    params.append('official', data.official);
    params.append('web', data.web);
    return this.http.post(this.urlConfig.ADD_BRAND, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}
