import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
  }

  buildingMenuShow() {
    // TODO
  }

  public packMenuShow() {
    this.msgService.packMenuShow();
  }
}
