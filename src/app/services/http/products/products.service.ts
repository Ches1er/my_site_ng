import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../../dto/products/Product';
import {map} from 'rxjs/operators';
import {ProductsResponse} from '../../../dto/products/ProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  product(id: number): Observable<Product> {
    return this.http.get(this.urlConfig.SHOW_PRODUCT + id)
      .pipe(map(product => Product.fromJson(product)));
  }
  productsByApplying(id: number): Observable<Array<Product>> {
    return this.http.get(this.urlConfig.SHOW_PRODUCTS_BY_APPLYING + id)
      .pipe(map(resp => ProductsResponse.fromJson(resp)))
      .pipe(map(productsResponse => productsResponse.data));
  }
  productsByBrand(id: number): Observable<Array<Product>>{
    return this.http.get(this.urlConfig.SHOW_PRODUCTS_BY_BRAND + id)
      .pipe(map(resp => ProductsResponse.fromJson(resp)))
      .pipe(map(productsResponse => productsResponse.data));
  }
}
