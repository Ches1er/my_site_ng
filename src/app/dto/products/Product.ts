export class Product {

  constructor(private pName: string,
              private pBrandId: number,
              private pSalesAreaId: number,
              private pActive: boolean,
              private pImg: Array,
              private pTechInfo: string
  ) {
  }


  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get brandId(): number {
    return this.pBrandId;
  }

  set brandId(value: number) {
    this.pBrandId = value;
  }

  get salesAreaId(): number {
    return this.pSalesAreaId;
  }

  set salesAreaId(value: number) {
    this.pSalesAreaId = value;
  }

  get active(): boolean {
    return this.pActive;
  }

  set active(value: boolean) {
    this.pActive = value;
  }

  get img(): Array {
    return this.pImg;
  }

  set img(value: Array) {
    this.pImg = value;
  }

  get techInfo(): string {
    return this.pTechInfo;
  }

  set techInfo(value: string) {
    this.pTechInfo = value;
  }

  public static fromJson(jsonObj): Product {
    return new Product(jsonObj.name, jsonObj.brand_id, jsonObj.sales_area_id,
      jsonObj.active, jsonObj.img, jsonObj.tech_info);
  }
}
