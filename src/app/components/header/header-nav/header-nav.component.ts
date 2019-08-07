import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent implements OnInit {

  private pAdminLoggedIn;
  constructor(@Inject(MessagesService) private msgService: MessagesService) { }

  ngOnInit() {
    this.adminLoggedIn = false;
    this.msgService.adminLoggedInMessage.subscribe(resp => this.adminLoggedIn = true);
  }

  get adminLoggedIn(): boolean {
    return this.pAdminLoggedIn;
  }

  set adminLoggedIn(value: boolean) {
    this.pAdminLoggedIn = value;
  }

}
