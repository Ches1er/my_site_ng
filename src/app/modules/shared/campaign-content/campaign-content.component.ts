import {Component, Inject, OnInit} from '@angular/core';
import {Campaign} from '../../../dto/campaign/Campaign';
import {CampaignService} from '../../../services/http/campaign/campaign.service';
import {ActivatedRoute} from '@angular/router';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.less']
})
export class CampaignContentComponent implements OnInit {

  private pSalesAreaDefiner = null;
  private pCampaign: Array<Campaign> = [];
  private pCurrentCampaign: Campaign = null;
  private pActiveBlock = null;

  constructor(@Inject(CampaignService) private campaignService: CampaignService,
              @Inject(MessagesService) private messageService: MessagesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(value => this.salesAreaDefiner = value.definer);
    if (this.salesAreaDefiner === 'build') {
      this.updateBuildCampaign();
    }
    if (this.salesAreaDefiner === 'pack') {
      this.updatePackCampaign();
    }
  }

  // Getters-Setters
  get salesAreaDefiner(): any {
    return this.pSalesAreaDefiner;
  }

  set salesAreaDefiner(value: any) {
    this.pSalesAreaDefiner = value;
  }

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
  get activeBlock(): any {
    return this.pActiveBlock;
  }

  set activeBlock(value: any) {
    this.pActiveBlock = value;
  }

  // Other Methods

  private updateBuildCampaign() {
    this.campaignService.buildingCampaign.subscribe(resp => {
      this.campaign = resp;
      this.currentCampaign = resp[0];
    });
  }
  private updatePackCampaign() {
    this.campaignService.packCampaign.subscribe(resp => {
      this.campaign = resp;
      this.currentCampaign = resp[0];
    });
  }

  changeCurrentCampaign(campaignUnit: Campaign, i) {
    this.messageService.changeCurrentCampaign(campaignUnit);
    this.activeBlock = i;
  }

}
