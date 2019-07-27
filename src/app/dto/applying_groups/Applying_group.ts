export class ApplyingGroup {

  constructor(private pId: number, private pName: string, private pSalesAreaId: number) {
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get salesAreaId(): number {
    return this.pSalesAreaId;
  }

  set salesAreaId(value: number) {
    this.pSalesAreaId = value;
  }

  public static fromJson(jsonObj: any): ApplyingGroup {
    return new ApplyingGroup(jsonObj.id, jsonObj.name, jsonObj.sales_area_id);
  }
}
