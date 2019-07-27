import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Campaign} from '../../../dto/campaign/Campaign';
import {CampaignResponse} from '../../../dto/campaign/CampaignResponse';
import {ApplyingGroup} from '../../../dto/applying_groups/Applying_group';
import {ApplyingGroupsResponse} from '../../../dto/applying_groups/ApplyingGroupsResponse';

@Injectable({
  providedIn: 'root'
})
export class ApplyingGroupsService {
  urlConfig: UrlConfig = new UrlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get packAppGroups(): Observable<Array<ApplyingGroup>> {
    return this.http.get(this.urlConfig.SHOW_PACK_GROUPS)
      .pipe(map(resp => ApplyingGroupsResponse.fromJson(resp)))
      .pipe(map(appGroupResponse => appGroupResponse.data));
  }
  get buildAppGroups(): Observable<Array<ApplyingGroup>> {
    return this.http.get(this.urlConfig.SHOW_BUILD_GROUPS)
      .pipe(map(resp => ApplyingGroupsResponse.fromJson(resp)))
      .pipe(map(appGroupResponse => appGroupResponse.data));
  }
}
