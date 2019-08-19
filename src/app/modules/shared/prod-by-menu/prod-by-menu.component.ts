import {Component, Inject, Input, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-prod-by-menu',
  templateUrl: './prod-by-menu.component.html',
  styleUrls: ['./prod-by-menu.component.less']
})
export class ProdByMenuComponent implements OnInit {

  @Input() groups: Array<any> = [];
  @Input() groupDefiner: string = null;

  constructor(private msgService: MessagesService) {
  }

  ngOnInit() {
  }

  showGroupContent(id: number) {
    this.msgService.productsMenuUnitsShow(id);
  }

}
