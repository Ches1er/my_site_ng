import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-auth-result',
  templateUrl: './auth-result.component.html',
  styleUrls: ['./auth-result.component.less']
})
export class AuthResultComponent implements OnInit {
  visible = false;
  definer = null;
  message = null;

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
    this.visible = false;
    this.msgService.registerSuccess.subscribe(data => {
        this.visible = true;
        this.definer = data[0];
        this.message = data[1];
    });
  }
  public cancel() {
    this.visible = false;
  }


}
