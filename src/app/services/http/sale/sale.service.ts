import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SaleProduct} from '../../../dto/sale_products/SaleProduct';
import {map} from 'rxjs/operators';
import {SaleProductsResponse} from '../../../dto/sale_products/SaleProductsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  urlConfig: UrlConfig = new UrlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  get saleProducts(): Observable<Array<SaleProduct>> {
    return this.http.get(this.urlConfig.SHOW_SALES_PRODUCTS)
      .pipe(map(resp => SaleProductsResponse.fromJson(resp)))
      .pipe(map(spr => spr.data));
  }
  saleProductsByBrand(brandId: number){
    return this.http.get(this.urlConfig.SHOW_SALES_PRODUCT_BY_BRAND + brandId)
      .pipe(map(resp => SaleProductsResponse.fromJson(resp)))
      .pipe(map(spr => spr.data));
  }
  sendOrderByEmail(order: any, userId: number, amount: number): Observable<any> {
    const params = new FormData();
    params.append('order', order);
    params.append('userId', userId.toString());
    params.append('amount', amount.toString());
    return this.http.post(this.urlConfig.SEND_ORDER_BY_EMAIL, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
  saveOrder(order: any, userId: number): Observable<any>{
    const date = Date.now();
    const params = new FormData();
    params.append('id', '');
    params.append('order', order);
    params.append('date', date.toString());
    params.append('userId', userId.toString());
    return this.http.post(this.urlConfig.SAVE_ORDER, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}
