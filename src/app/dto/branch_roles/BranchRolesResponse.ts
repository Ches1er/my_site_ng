import {BranchRoles} from './BranchRoles';

export class BranchRolesResponse {


  constructor(private pData: Array<BranchRoles>) {
  }

  get data(): Array<BranchRoles> {
    return this.pData;
  }

  set data(value: Array<BranchRoles>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): BranchRolesResponse {
    return new BranchRolesResponse(jsonObj.map(e => BranchRoles.fromJson(e)));
  }
}
