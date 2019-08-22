import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpUrlEncodingCodec} from '@angular/common/http';
import {UrlConfig} from '../../../config/url-config';
import {map} from 'rxjs/operators';
import {BuildObjectsResponse} from '../../../dto/objects/Build_objectsResponse';
import {BuildObject} from '../../../dto/objects/Build_object';
import {Observable} from 'rxjs';
import {ServerResponse} from 'http';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';
import {CookieService} from 'ngx-cookie-service';
import {encode} from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class BuildingObjectsService {
  urlConfig: UrlConfig = new UrlConfig();
  urlEncode = new HttpUrlEncodingCodec();

  constructor(@Inject(HttpClient) private http: HttpClient,
              @Inject(CookieService) private cookieService: CookieService) {
  }

  buildObjs() {
    return this.http.get(this.urlConfig.SHOW_BUILD_OBJS)
      .pipe(map(resp => BuildObjectsResponse.fromJson(resp)))
      .pipe(map(buildObjResp => buildObjResp.data));
  }

  buildObj() {
    return this.http.get(this.urlConfig.SHOW_BUILD_OBJS + 'build')
      .pipe(map(resp => BuildObject.fromJson(resp)));
  }
  add(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('api_token', this.cookieService.get('api_token'));
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('desc', this.urlEncode.encodeValue(data.desc));
    params.append('img', data.imgId.join(','));
    return this.http.post(this.urlConfig.ADD_BUILD_OBJ, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }

}
