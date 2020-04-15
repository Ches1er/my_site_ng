import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent implements OnInit {


  private pAdminLoggedIn;
  private pUserLoggedIn;

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
    this.unlogUser();
    this.msgService.adminLoggedInMessage.subscribe(() => this.adminLoggedIn = true);
    this.msgService.loginSuccessMessage.subscribe(() => this.userLoggedIn = true);
    this.msgService.logoutSuccessMessage.subscribe(() => {
      this.unlogUser();
    });
  }

  get adminLoggedIn(): boolean {
    return this.pAdminLoggedIn;
  }

  set adminLoggedIn(value: boolean) {
    this.pAdminLoggedIn = value;
  }

  get userLoggedIn() {
    return this.pUserLoggedIn;
  }

  set userLoggedIn(value) {
    this.pUserLoggedIn = value;
  }

  unlogUser() {
    this.adminLoggedIn = false;
    this.userLoggedIn = false;
  }

}
