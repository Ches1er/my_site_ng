export class Client {

  constructor(private pName: string, private pDesc: string, private pLogo: string, private pSalesAreaId: number) {
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

  get desc(): string {
    return this.pDesc;
  }

  set desc(value: string) {
    this.pDesc = value;
  }

  get logo(): string {
    return this.pLogo;
  }

  set logo(value: string) {
    this.pLogo = value;
  }

  public static fromJson(jsonObj: any): Client {
    return new Client(jsonObj.name, jsonObj.desc, jsonObj.logo, jsonObj.sales_area_id);
  }
}
