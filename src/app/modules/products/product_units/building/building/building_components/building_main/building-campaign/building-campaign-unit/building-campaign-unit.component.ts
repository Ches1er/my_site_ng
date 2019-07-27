import {Component, Input, OnInit} from '@angular/core';
import {Campaign} from '../../../../../../../../../dto/campaign/Campaign';

@Component({
  selector: 'app-building-campaign-unit',
  templateUrl: './building-campaign-unit.component.html',
  styleUrls: ['./building-campaign-unit.component.css']
})
export class BuildingCampaignUnitComponent implements OnInit {
  @Input() campaign: Campaign = null;
  constructor() { }

  ngOnInit() {
  }

}
