import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SaleProduct} from '../../../dto/sale_products/SaleProduct';
import {map} from 'rxjs/operators';
import {SaleProductsResponse} from '../../../dto/sale_products/SaleProductsResponse';

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
}
