export class BrandExchange {

  constructor(private pId: number, private pBrandId: number, private pExchange: number) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get brandId(): number {
    return this.pBrandId;
  }

  set brandId(value: number) {
    this.pBrandId = value;
  }

  get exchange(): number {
    return this.pExchange;
  }

  set exchange(value: number) {
    this.pExchange = value;
  }

  public static fromJson(jsonObj: any): BrandExchange {
    return new BrandExchange(jsonObj.id, jsonObj.brand_id, jsonObj.exchange);
  }
}
