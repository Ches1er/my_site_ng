import {Brand} from './Brand';

export class BrandsResponse {

  constructor(private pData: Array<Brand>) {
  }

  get data(): Array<Brand> {
    return this.pData;
  }

  set data(value: Array<Brand>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): BrandsResponse {
    return new BrandsResponse(jsonObj.map(e => Brand.fromJson(e)));
  }
}
