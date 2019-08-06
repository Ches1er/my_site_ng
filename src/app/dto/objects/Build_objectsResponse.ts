import {BuildObject} from './Build_object';

export class BuildObjectsResponse {

  constructor(private pData: Array<BuildObject>) {
  }

  get data(): Array<BuildObject> {
    return this.pData;
  }

  set data(value: Array<BuildObject>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): BuildObjectsResponse {
    return new BuildObjectsResponse(jsonObj.map(bo => BuildObject.fromJson(bo)));
  }
}
