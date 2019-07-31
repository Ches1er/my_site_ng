export class Product {

  constructor(private pId: number,
              private pName: string,
              private pBrandId: number,
              private pSalesAreaId: number,
              private pActive: boolean,
              private pImg: Array<string>,
              private pTechInfo: string
  ) {
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

  get img(): Array<string> {
    return this.pImg;
  }

  set img(value: Array<string>) {
    this.pImg = value;
  }

  get techInfo(): string {
    return this.pTechInfo;
  }

  set techInfo(value: string) {
    this.pTechInfo = value;
  }

  public static fromJson(jsonObj): Product {
    return new Product(jsonObj.id, jsonObj.name, jsonObj.brand_id, jsonObj.sales_area_id,
      jsonObj.active, jsonObj.img, jsonObj.tech_info);
  }
}
