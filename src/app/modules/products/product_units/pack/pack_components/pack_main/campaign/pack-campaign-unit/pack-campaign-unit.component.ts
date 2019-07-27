import {Component, Input, OnInit} from '@angular/core';
import {Campaign} from '../../../../../../../../dto/campaign/Campaign';

@Component({
  selector: 'app-pack-campaign-unit',
  templateUrl: './pack-campaign-unit.component.html',
  styleUrls: ['./pack-campaign-unit.component.css']
})
export class PackCampaignUnitComponent implements OnInit {

  @Input() campaign: Campaign = null;

  constructor() {
  }

  ngOnInit() {
  }

}
