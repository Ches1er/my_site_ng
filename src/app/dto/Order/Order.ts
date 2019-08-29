export class Order {

  get orderStr(): string {
    return this.pOrderStr;
  }

  set orderStr(value: string) {
    this.pOrderStr = value;
  }

  constructor(
              private pOrderStr: string,
              ) {
  }
  public static fromJson(jsonObj: any): Order {
    return new Order(jsonObj.order);
  }
}
