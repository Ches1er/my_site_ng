export class Client {

  constructor(private pId: number,
              private pName: string,
              private pImg: string,
              private pDesc: string,
              private pSalesAreaId: number,
              private pImgId: number) {
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

  get imgId(): number {
    return this.pImgId;
  }

  set imgId(value: number) {
    this.pImgId = value;
  }

  get salesAreaId(): number {
    return this.pSalesAreaId;
  }

  set salesAreaId(value: number) {
    this.pSalesAreaId = value;
  }

  get desc(): string {
    return this.pDesc;
  }

  set desc(value: string) {
    this.pDesc = value;
  }

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
    this.pImg = value;
  }

  public static fromJson(jsonObj: any): Client {
    return new Client(jsonObj.id, jsonObj.name, jsonObj.img, jsonObj.desc, jsonObj.sales_area_id, jsonObj.img_id);
  }
}
