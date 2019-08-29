import {Order} from './Order';

export class OrderResponse {

  get orders(): Array<string> {
    return this.pOrders;
  }

  set orders(value: Array<string>) {
    this.pOrders = value;
  }

  constructor(private pOrders: Array<string>) {
  }
  public static fromJson(jsonObj: any): OrderResponse {
    const arr = [];
    jsonObj.map(e => {
      arr.push(e.order);
    });
    return new OrderResponse(arr);
  }
}
