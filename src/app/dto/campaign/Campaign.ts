export class Campaign {

  constructor(private pId: number,
              private pName: string,
              private pShortCampaign: string,
              private pFullCampaign: string,
              private pImg: string,
              private pDate,
              private pExpiration,
              private pSalesAreaId: number) {
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

  get shortCampaign(): string {
    return this.pShortCampaign;
  }

  set shortCampaign(value: string) {
    this.pShortCampaign = value;
  }

  get fullCampaign(): string {
    return this.pFullCampaign;
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

  get date() {
    return this.pDate;
  }

  set date(value) {
    this.pDate = value;
  }

  get expiration() {
    return this.pExpiration;
  }

  set expiration(value) {
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
      jsonObj.date,
      jsonObj.expiration,
      jsonObj.sales_area_id);

  }}
