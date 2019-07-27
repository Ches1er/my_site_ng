import {Component, Inject, Input, OnInit} from '@angular/core';
import {ApplyingGroup} from '../../../../../../../../dto/applying_groups/Applying_group';
import {MessagesService} from '../../../../../../../../services/messages.service';

@Component({
  selector: 'app-pack-prod-by-app-menu',
  templateUrl: './pack-prod-by-app-menu.component.html',
  styleUrls: ['./pack-prod-by-app-menu.component.css']
})
export class PackProdByAppMenuComponent implements OnInit {
  @Input() appGroups: Array<ApplyingGroup> = [];

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
  }

  showGroupContent(id: number) {
    this.msgService.productsMenuUnitsShow(id);
  }

}
