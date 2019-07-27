import {ApplyingGroup} from './Applying_group';
import {CampaignResponse} from '../campaign/CampaignResponse';
import {Campaign} from '../campaign/Campaign';

export class ApplyingGroupsResponse {

  constructor(private pData: Array<ApplyingGroup>) {
  }

  get data(): Array<ApplyingGroup> {
    return this.pData;
  }

  set data(value: Array<ApplyingGroup>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): ApplyingGroupsResponse {
    return new ApplyingGroupsResponse(jsonObj.map(e => ApplyingGroup.fromJson(e)));
  }
}
