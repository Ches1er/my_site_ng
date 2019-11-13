import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Brand} from '../../../dto/Brand/Brand';
import {BrandsResponse} from '../../../dto/Brand/BrandsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';
import {BrandExchange} from '../../../dto/brand_exchange/Brand_exchange';
import {BrandExchangeResponse} from '../../../dto/brand_exchange/Brand_exchange_response';

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
  get exchanges(): Observable<Array<BrandExchange>> {
    return this.http.get(this.urlConfig.SHOW_EXCHANGES)
      .pipe(map(resp => BrandExchangeResponse.fromJson(resp)))
      .pipe(map(ber => ber.data));
  }
  private getApiToken(): any {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      return data.api_token;
    }
    return false;
  }
  add(data: any, action: string): Observable<string> {
    console.log(data);
    const params = new FormData();
    params.append('api_token', this.getApiToken());
    params.append('name', data.name);
    params.append('sales_area', data.salesArea);
    params.append('id', data.id);
    params.append('action', action);
    params.append('active', data.active);
    params.append('official', data.official);
    params.append('web', data.web);
    params.append('exchange', data.exchange);
    return this.http.post(this.urlConfig.ADD_BRAND, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}
