import {SaleProduct} from './SaleProduct';

export class SaleProductsResponse {

  constructor(private pData: Array<SaleProduct>) {
  }

  get data(): Array<SaleProduct> {
    return this.pData;
  }

  set data(value: Array<SaleProduct>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): SaleProductsResponse {
    return new SaleProductsResponse(jsonObj.map(e => SaleProduct.fromJson(e)));
  }
}
