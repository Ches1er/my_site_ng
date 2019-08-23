export class SaleProduct {

  constructor(private pId: number, private pName: string, private pPrice: number, private pBrandId: number, private pMeasure: string) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get price(): number {
    return this.pPrice;
  }

  set price(value: number) {
    this.pPrice = value;
  }
  get brandId(): number {
    return this.pBrandId;
  }

  set brandId(value: number) {
    this.pBrandId = value;
  }

  get measure(): string {
    return this.pMeasure;
  }

  set measure(value: string) {
    this.pMeasure = value;
  }
  public static fromJson(jsonObj: any): SaleProduct {
    return new SaleProduct(jsonObj.id, jsonObj.name, jsonObj.price, jsonObj.brand_id, jsonObj.measure);
  }
}
