import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlConfig} from '../../../config/url-config';
import {map} from 'rxjs/operators';
import {BuildObjectsResponse} from '../../../dto/objects/Build_objectsResponse';
import {BuildObject} from '../../../dto/objects/Build_object';

@Injectable({
  providedIn: 'root'
})
export class BuildingObjectsService {
  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
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

}
