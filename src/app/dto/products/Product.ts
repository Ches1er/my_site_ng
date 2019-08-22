import {HttpUrlEncodingCodec} from '@angular/common/http';

export class Product {
  private urlEncode = new HttpUrlEncodingCodec();
  constructor(private pId: number,
              private pName: string,
              private pBrandId: number,
              private pSalesAreaId: number,
              private pActive: boolean,
              private pImg: string,
              private pImgId: number,
              private pTechInfo: string,
              private pApplyingGroupId: number
  ) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  set imgId(value: number) {
    this.pImgId = value;
  }

  get imgId(): number {
    return this.pImgId;
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

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
    this.pImg = value;
  }

  get techInfo(): string {
    return this.urlEncode.decodeValue(this.pTechInfo);
  }

  set techInfo(value: string) {
    this.pTechInfo = value;
  }

  get applyingGroupId(): number {
    return this.pApplyingGroupId;
  }

  set applyingGroupId(value: number) {
    this.pApplyingGroupId = value;
  }

  public static fromJson(jsonObj): Product {
    return new Product(jsonObj.id,
      jsonObj.name,
      jsonObj.brand_id,
      jsonObj.sales_area_id,
      jsonObj.active,
      jsonObj.img,
      jsonObj.img_id,
      jsonObj.tech_info,
      jsonObj.applying_group_id);
  }
}
