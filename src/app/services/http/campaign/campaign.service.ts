import {Inject, Injectable} from '@angular/core';
import {UrlConfig} from '../../../config/url-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Campaign} from '../../../dto/campaign/Campaign';
import {map} from 'rxjs/operators';
import {CampaignResponse} from '../../../dto/campaign/CampaignResponse';

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
}
