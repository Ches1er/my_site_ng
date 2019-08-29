import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.less']
})
export class InfoWindowComponent implements OnInit {
  get message(): any {
    return this.pMessage;
  }

  set message(value: any) {
    this.pMessage = value;
  }

  private pMessage = null;
  private visible = false;

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
    this.msgService.infoWindowShow.subscribe(m => {
      this.message = m;
      this.visible = true;
    });
  }

  public cancel() {
    this.visible = false;
  }

}
