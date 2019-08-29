import {Component, Inject, Input, OnInit} from '@angular/core';
import {Campaign} from '../../../../dto/campaign/Campaign';
import {DatePipe} from '@angular/common';
import {MessagesService} from '../../../../services/messages.service';

@Component({
  selector: 'app-campaign-content-unit',
  templateUrl: './campaign-content-unit.component.html',
  styleUrls: ['./campaign-content-unit.component.less']
})
export class CampaignContentUnitComponent implements OnInit {
  datePipe = new DatePipe('en-EN');
  @Input() campaign: Campaign = null;
  private pCampaignExpired = false;

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  get campaignExpired() {
    return this.pCampaignExpired;
  }

  set campaignExpired(value) {
    this.pCampaignExpired = value;
  }

  private ifExpired() {
    const now = Date.now();
    this.campaignExpired = this.campaign.expiration < now;
  }

  ngOnInit() {
    this.ifExpired();
    this.msgService.changeCurrentCampaignMessage.subscribe(campaign => {
      this.campaign = campaign;
      this.ifExpired();
    });
  }
}
