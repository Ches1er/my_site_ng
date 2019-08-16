import {Branch} from './Branch';

export class BranchesResponse {

  constructor(private pData: Array<Branch>) {
  }

  get data(): Array<Branch> {
    return this.pData;
  }

  set data(value: Array<Branch>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): BranchesResponse {
    return new BranchesResponse(jsonObj.map(e => Branch.fromJson(e)));
  }
}
