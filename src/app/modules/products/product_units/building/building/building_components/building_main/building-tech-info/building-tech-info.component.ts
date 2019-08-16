import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../../../../../../../services/messages.service';

@Component({
  selector: 'app-building-tech-info',
  templateUrl: './building-tech-info.component.html',
  styleUrls: ['./building-tech-info.component.less']
})
export class BuildingTechInfoComponent implements OnInit {
  active: boolean = false;
  private pCalcDefiner = null;
  constructor(private msgService: MessagesService) {
  }

  ngOnInit() {
  }
  get isCalcDefiner(): any {
    return this.pCalcDefiner;
  }

  set isCalcDefiner(value: any) {
    this.pCalcDefiner = value;
  }

  setCalcDefiner(definer) {
    this.msgService.groutCalcShowMessage(definer);
    this.isCalcDefiner = definer;
  }
}
