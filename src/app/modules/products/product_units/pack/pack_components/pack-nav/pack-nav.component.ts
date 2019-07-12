import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../../../../services/messages.service';

@Component({
  selector: 'app-pack-nav',
  templateUrl: './pack-nav.component.html',
  styleUrls: ['./pack-nav.component.less']
})
export class PackNavComponent implements OnInit {

  visible = false;

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
    this.msgService.packMenuMessage.subscribe(m => this.visible = true);
  }

}
