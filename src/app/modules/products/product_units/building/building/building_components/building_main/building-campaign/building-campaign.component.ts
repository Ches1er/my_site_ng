import {Component, Inject, OnInit} from '@angular/core';
import {Campaign} from '../../../../../../../../dto/campaign/Campaign';
import {CampaignService} from '../../../../../../../../services/http/campaign/campaign.service';

@Component({
  selector: 'app-building-campaign',
  templateUrl: './building-campaign.component.html',
  styleUrls: ['./building-campaign.component.css']
})
export class BuildingCampaignComponent implements OnInit {

  private pCampaign: Array<Campaign> = [];
  private pCurrentCampaign: Campaign = null;

  constructor(@Inject(CampaignService) private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.updateCampaign();
  }

  // Getters-Setters

  get campaign(): Array<Campaign> {
    return this.pCampaign;
  }

  set campaign(value: Array<Campaign>) {
    this.pCampaign = value;
  }

  get currentCampaign(): Campaign {
    return this.pCurrentCampaign;
  }

  set currentCampaign(value: Campaign) {
    this.pCurrentCampaign = value;
  }

  // Other Methods

  private updateCampaign() {
    this.campaignService.buildingCampaign.subscribe(resp => {
      this.campaign = resp;
      this.currentCampaign = resp[resp.length - 1];
    });
  }

  changeCurrentCampaign(campaignUnit: Campaign) {
    this.currentCampaign = campaignUnit;
  }
}
