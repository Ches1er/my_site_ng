import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Campaign} from '../../../dto/campaign/Campaign';
import {map} from 'rxjs/operators';
import {CampaignResponse} from '../../../dto/campaign/CampaignResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  urlConfig: UrlConfig = new UrlConfig();

  constructor(
    @Inject(HttpClient) private http: HttpClient) {
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
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('short_event', data.short_campaign);
    params.append('full_event', data.full_campaign);
    params.append('img', data.img);
    params.append('sales_area', data.salesArea);
    params.append('expiration', data.expiration);
    params.append('date', data.date);
    return this.http.post(this.urlConfig.ADD_CAMPAIGN, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));

  }
/*  addCampaign(data: any, action: string): Observable<any> {
   console.log(data);
   console.log(action);
  }*/
}
