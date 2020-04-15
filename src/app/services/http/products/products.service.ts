import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../../dto/products/Product';
import {map} from 'rxjs/operators';
import {ProductsResponse} from '../../../dto/products/ProductsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  allProducts(): Observable<Array<Product>> {
    return this.http.get(this.urlConfig.SHOW_ALL_PRODUCTS)
      .pipe(map(resp => ProductsResponse.fromJson(resp)))
      .pipe(map(productsResponse => productsResponse.data));
  }

  product(id: number): Observable<Product> {
    return this.http.get(this.urlConfig.SHOW_PRODUCT + id)
      .pipe(map(product => Product.fromJson(product)));
  }
  findProducts(findData: string): Observable<Array<Product>> {
    return this.http.get(this.urlConfig.FIND_PRODUCTS + findData)
      .pipe(map(resp => {
        return ProductsResponse.fromJson(resp);
      }))
      .pipe(map(productsResponse => productsResponse.data));
  }

  productsByApplying(id: number): Observable<Array<Product>> {
    return this.http.get(this.urlConfig.SHOW_PRODUCTS_BY_APPLYING + id)
      .pipe(map(resp => ProductsResponse.fromJson(resp)))
      .pipe(map(productsResponse => productsResponse.data));
  }

  productsByBrand(id: number): Observable<Array<Product>> {
    return this.http.get(this.urlConfig.SHOW_PRODUCTS_BY_BRAND + id)
      .pipe(map(resp => ProductsResponse.fromJson(resp)))
      .pipe(map(productsResponse => productsResponse.data));
  }
  private getApiToken(): any {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      return data.api_token;
    }
    return false;
  }

  addUpdateProduct(data: any, action: string): Observable<any> {
    const params = new FormData();
    params.append('api_token', this.getApiToken());
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('brandId', data.brands);
    params.append('active', data.active);
    params.append('img', data.img);
    params.append('tech_info', data.tech_info);
    params.append('applying_group', data.applying_group);
    params.append('salesArea', data.salesArea);
    return this.http.post(this.urlConfig.ADD_PRODUCT, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }

}
