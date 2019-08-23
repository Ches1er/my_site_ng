import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../../services/messages.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-buttons-block',
  templateUrl: './auth-buttons-block.component.html',
  styleUrls: ['./auth-buttons-block.component.less']
})
export class AuthButtonsBlockComponent implements OnInit {

  ifUserLoggedIn = false;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(CookieService) private cookieService: CookieService) {
  }

  ngOnInit() {
    this.ifUserLoggedIn = false;
    this.cookieService.get('remember_token') !== null ? this.cookieService.delete('api_token') : this.cookieService.check('api_token');
    this.msgService.loginSuccessMessage.subscribe(m => this.ifUserLoggedIn = true);
    this.msgService.logoutSuccessMessage.subscribe(m => {
      this.ifUserLoggedIn = false;
    });
    this.ifUserLoggedIn = this.cookieService.check('api_token') && this.cookieService.get('remember_token') === null;
  }

  loginWindowShow() {
    this.msgService.loginWindowShow();
  }

  registerWindowShow() {
    this.msgService.registerWindowShow();
  }

  logout() {
    this.emptyCookie();
    this.msgService.logoutSuccess();
  }

  private emptyCookie() {
    this.cookieService.delete('api_token');
    this.cookieService.delete('remember_token');
  }
}
