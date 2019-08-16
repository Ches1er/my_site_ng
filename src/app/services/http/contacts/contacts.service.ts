import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Branch} from '../../../dto/Branch/Branch';
import {map} from 'rxjs/operators';
import {BranchesResponse} from '../../../dto/Branch/Branches_response';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }
  get branches(): Observable<Array<Branch>> {
    return this.http.get(this.urlConfig.BRANCHES)
      .pipe(map(resp => BranchesResponse.fromJson(resp)))
      .pipe(map(Br => Br.data));
  }
}
