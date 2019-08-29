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
    // this.cookieService.get('remember_token') !== null ? this.cookieService.delete('api_token') : this.cookieService.check('api_token');
    this.msgService.loginSuccessMessage.subscribe(m => this.ifUserLoggedIn = true);
    this.msgService.logoutSuccessMessage.subscribe(m => {
      this.ifUserLoggedIn = false;
    });
    if (localStorage.length > 0) {
      const tokenData = JSON.parse(localStorage.getItem('tokenData'));
      if (tokenData.remember_token === null) {
        this.ifUserLoggedIn = false;
        localStorage.clear();
      }
    }
  }

  loginWindowShow() {
    this.msgService.loginWindowShow();
  }

  registerWindowShow() {
    this.msgService.registerWindowShow();
  }

  logout() {
    localStorage.clear();
    this.msgService.logoutSuccess();
  }

}
