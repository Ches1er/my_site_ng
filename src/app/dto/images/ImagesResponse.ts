import {Image} from './Image';

export class ImagesResponse {

  constructor(private pData: Array<Image>) {
  }

  get data(): Array<Image> {
    return this.pData;
  }

  set data(value: Array<Image>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): ImagesResponse {
    return new ImagesResponse(jsonObj.map(e => Image.fromJson(e)));
  }
}
