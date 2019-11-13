export class  ClientDiscount {

  constructor(private pId: number,
              private pClientId: number,
              private pBrandId: number,
              private pDiscount: number,
              private pBrand: string) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get clientId(): number {
    return this.pClientId;
  }

  set clientId(value: number) {
    this.pClientId = value;
  }

  get brandId(): number {
    return this.pBrandId;
  }

  set brandId(value: number) {
    this.pBrandId = value;
  }

  get discount(): number {
    return this.pDiscount;
  }

  set discount(value: number) {
    this.pDiscount = value;
  }

  get brand(): string {
    return this.pBrand;
  }

  set brand(value: string) {
    this.pBrand = value;
  }
  public static fromJson(jsonObj: any): ClientDiscount {
    return new ClientDiscount(jsonObj.id, jsonObj.client_id, jsonObj.brand_id, jsonObj.discount, jsonObj.brand);
  }
}
