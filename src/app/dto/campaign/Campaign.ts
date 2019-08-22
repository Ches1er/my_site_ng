import {HttpUrlEncodingCodec} from '@angular/common/http';

export class Campaign {
  private urlEncode = new HttpUrlEncodingCodec();
  constructor(private pId: number,
              private pName: string,
              private pShortCampaign: string,
              private pFullCampaign: string,
              private pImg: string,
              private pImgId: number,
              private pDate: number,
              private pExpiration: number,
              private pSalesAreaId: number) {
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

  get shortCampaign(): string {
    return this.urlEncode.decodeValue(this.pShortCampaign);
  }

  set shortCampaign(value: string) {
    this.pShortCampaign = value;
  }

  get fullCampaign(): string {
    return this.urlEncode.decodeValue(this.pFullCampaign);
  }

  set fullCampaign(value: string) {
    this.pFullCampaign = value;
  }

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
    this.pImg = value;
  }

  get date(): number {
    return this.pDate;
  }

  set date(value: number) {
    this.pDate = value;
  }

  get expiration(): number {
    return this.pExpiration;
  }

  set expiration(value: number) {
    this.pExpiration = value;
  }

  get salesAreaId(): number {
    return this.pSalesAreaId;
  }

  set salesAreaId(value: number) {
    this.pSalesAreaId = value;
  }

  public static fromJson(jsonObj: any): Campaign {
    return new Campaign(
      jsonObj.id,
      jsonObj.name,
      jsonObj.short_event,
      jsonObj.full_event,
      jsonObj.img,
      jsonObj.img_id,
      jsonObj.date,
      jsonObj.expiration,
      jsonObj.sales_area_id);

  }}
