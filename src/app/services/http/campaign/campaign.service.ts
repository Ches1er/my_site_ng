import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient, HttpUrlEncodingCodec} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Campaign} from '../../../dto/campaign/Campaign';
import {map} from 'rxjs/operators';
import {CampaignResponse} from '../../../dto/campaign/CampaignResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  urlConfig: UrlConfig = new UrlConfig();
  urlEncode = new HttpUrlEncodingCodec();

  constructor(
    @Inject(HttpClient) private http: HttpClient, private cookieService: CookieService) {
  }

  get packCampaign(): Observable<Array<Campaign>> {
    return this.http.get(this.urlConfig.PACK_CAMPAIGN)
      .pipe(map(resp => CampaignResponse.fromJson(resp)))
      .pipe(map(campaignResponse => campaignResponse.data));
  }

  get buildingCampaign(): Observable<Array<Campaign>> {
    return this.http.get(this.urlConfig.BUILDING_CAMPAIGN)
      .pipe(map(resp => CampaignResponse.fromJson(resp)))
      .pipe(map(campaignResponse => campaignResponse.data));
  }

  get allCampaign(): Observable<Array<Campaign>> {
    return this.http.get(this.urlConfig.ALL_CAMPAIGN)
      .pipe(map(resp => CampaignResponse.fromJson(resp)))
      .pipe(map(campaignResponse => campaignResponse.data));
  }

  addCampaign(data: any, action: string): Observable<any> {
    const params = new FormData();
    // params.append('api_token', this.cookieService.get('api_token'));
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('short_event', this.urlEncode.encodeValue(data.short_campaign));
    params.append('full_event', this.urlEncode.encodeValue(data.full_campaign));
    params.append('img', data.img);
    params.append('sales_area', data.salesArea);
    params.append('expiration', data.expiration);
    params.append('date', data.date);
    return this.http.post(this.urlConfig.ADD_CAMPAIGN, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));

  }
}
