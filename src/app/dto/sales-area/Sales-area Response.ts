import {SalesArea} from './Sales-area';

export class SalesAreaResponse {

  constructor(private pData: Array<SalesArea>) {
  }

  get data(): Array<SalesArea> {
    return this.pData;
  }

  set data(value: Array<SalesArea>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): SalesAreaResponse {
    return new SalesAreaResponse(jsonObj.map(e => SalesArea.fromJson(e)));
  }
}
