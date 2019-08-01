import {BuildObject} from './Build_object';

export class BuildObjectsResponse {

  constructor(private data: Array<BuildObject>) {
  }
  public static fromJson(jsonObj: any): BuildObjectsResponse {
    return new BuildObjectsResponse(jsonObj.map(bo => BuildObject.fromJson(bo)));
  }
}
