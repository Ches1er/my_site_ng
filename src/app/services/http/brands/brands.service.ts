import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApplyingGroup} from '../../../dto/applying_groups/Applying_group';
import {map} from 'rxjs/operators';
import {ApplyingGroupsResponse} from '../../../dto/applying_groups/ApplyingGroupsResponse';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Brand} from '../../../dto/Brand/Brand';
import {BrandsResponse} from '../../../dto/Brand/BrandsResponse';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  urlConfig: UrlConfig = new UrlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get packBrands(): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.SHOW_PACK_BRANDS)
      .pipe(map(resp => BrandsResponse.fromJson(resp)))
      .pipe(map(brandRespose => brandRespose.data));
  }
  get buildBrands(): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.SHOW_BUILDING_BRANDS)
      .pipe(map(resp => BrandsResponse.fromJson(resp)))
      .pipe(map(brandRespose => brandRespose.data));
  }
}
