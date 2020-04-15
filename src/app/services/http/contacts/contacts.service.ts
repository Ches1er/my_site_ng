import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Branch} from '../../../dto/Branch/Branch';
import {map} from 'rxjs/operators';
import {BranchesResponse} from '../../../dto/Branch/Branches_response';
import {BranchRoles} from '../../../dto/branch_roles/BranchRoles';
import {BranchRolesResponse} from '../../../dto/branch_roles/BranchRolesResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }
  private getApiToken(): any {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      return data.api_token;
    }
    return false;
  }
  get branches(): Observable<Array<Branch>> {
    return this.http.get(this.urlConfig.BRANCHES)
      .pipe(map(resp => BranchesResponse.fromJson(resp)))
      .pipe(map(Br => Br.data));
  }
  get branchRoles(): Observable<any> {
    return this.http.get(this.urlConfig.BRANCHESROLES)
      .pipe(map(resp => BranchRolesResponse.fromJson(resp)))
      .pipe(map(BrR => BrR.data));
  }
  addBranch(data: any, action: string): Observable<any> {
    const params = new FormData();
    params.append('api_token', this.getApiToken());
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('address', data.address);
    params.append('phone', data.phone);
    params.append('long', data.long);
    params.append('lat', data.lat);
    params.append('role_id', data.role_id);
    params.append('active', data.active);
    return this.http.post(this.urlConfig.ADD_BRANCH, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}
