import {BrandExchange} from './Brand_exchange';

export class BrandExchangeResponse {
  constructor(private pData: Array<BrandExchange>) {
  }

  get data(): Array<BrandExchange> {
    return this.pData;
  }

  set data(value: Array<BrandExchange>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): BrandExchangeResponse {
    return new BrandExchangeResponse(jsonObj.map(e => BrandExchange.fromJson(e)));
  }
}
