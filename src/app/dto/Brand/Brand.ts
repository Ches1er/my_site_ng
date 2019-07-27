export class Brand {

  constructor(private pName: string,
              private pId: number,
              private pSalesAreaId: number,
              private pImg: string) {
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

  get salesAreaId(): number {
    return this.pSalesAreaId;
  }

  set salesAreaId(value: number) {
    this.pSalesAreaId = value;
  }

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
    this.pImg = value;
  }

  public static fromJson(jsonObj: any): Brand {
    return new Brand(jsonObj.id, jsonObj.name, jsonObj.sales_area_id, jsonObj.img);
  }
}
