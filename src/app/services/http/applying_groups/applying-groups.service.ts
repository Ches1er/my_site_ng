import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApplyingGroup} from '../../../dto/applying_groups/Applying_group';
import {ApplyingGroupsResponse} from '../../../dto/applying_groups/ApplyingGroupsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

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
  get allAppGroups(): Observable<Array<ApplyingGroup>> {
    return this.http.get(this.urlConfig.SHOW_ALL_GROUPS)
      .pipe(map(resp => ApplyingGroupsResponse.fromJson(resp)))
      .pipe(map(appGroupResponse => appGroupResponse.data));
  }
  add(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('sales_area', data.salesArea);
    params.append('action', action);
    return this.http.post(this.urlConfig.ADD_GROUP, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }

}
