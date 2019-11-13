import {ClientDiscount} from './ClientDiscount';

export class ClientDiscountResponse {

  constructor(private pData: Array<ClientDiscount>) {
  }

  get data(): Array<ClientDiscount> {
    return this.pData;
  }

  set data(value: Array<ClientDiscount>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): ClientDiscountResponse {
    return new ClientDiscountResponse(jsonObj.map(e => ClientDiscount.fromJson(e)));
  }
}
