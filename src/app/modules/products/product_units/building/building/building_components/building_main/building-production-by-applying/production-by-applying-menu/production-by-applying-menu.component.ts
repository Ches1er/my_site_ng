import {Component, Inject, Input, OnInit} from '@angular/core';
import {ApplyingGroup} from '../../../../../../../../../dto/applying_groups/Applying_group';
import {MessagesService} from '../../../../../../../../../services/messages.service';

@Component({
  selector: 'app-production-by-applying-menu',
  templateUrl: './production-by-applying-menu.component.html',
  styleUrls: ['./production-by-applying-menu.component.css']
})
export class ProductionByApplyingMenuComponent implements OnInit {
  @Input() appGroups: Array<ApplyingGroup> = [];

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
  }

  showGroupContent(id: number) {
    this.msgService.productsMenuUnitsShow(id);
  }
}
