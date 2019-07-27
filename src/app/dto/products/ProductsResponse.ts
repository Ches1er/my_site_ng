import {Product} from './Product';

export class ProductsResponse {

  constructor(private pData: Array<Product>) {
  }

  get data(): Array<Product> {
    return this.pData;
  }

  set data(value: Array<Product>) {
    this.pData = value;
  }

  public static fromJson(jsonObj): ProductsResponse {
    return new ProductsResponse(jsonObj.map(e => Product.fromJson(e)));
  }
}
