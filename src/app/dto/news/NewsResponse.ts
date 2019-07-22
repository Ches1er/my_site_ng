import {News} from './News';

export class NewsResponse {

  constructor(private pData: Array<News>) {
  }

  get data(): Array<News> {
    return this.pData;
  }

  set data(value: Array<News>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): NewsResponse {
    return new NewsResponse(jsonObj.map(e => News.fromJson(e)));
  }
}
