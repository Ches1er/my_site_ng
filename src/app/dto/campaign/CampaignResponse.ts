import {Campaign} from './Campaign';

export class CampaignResponse {

  constructor(private pData: Array<Campaign>) {
  }

  get data(): Array<Campaign> {
    return this.pData;
  }

  set data(value: Array<Campaign>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): CampaignResponse {
    return new CampaignResponse(jsonObj.map(e => Campaign.fromJson(e)));
  }
}
