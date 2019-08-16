import {Solution} from './Solution';

export class SolutionsResponse {

  constructor(private pData: Array<Solution>) {
  }

  get data(): Array<Solution> {
    return this.pData;
  }

  set data(value: Array<Solution>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): SolutionsResponse {
    return new SolutionsResponse(jsonObj.map(e => Solution.fromJson(e)));
  }
}
