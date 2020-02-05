import {Component, Inject, OnInit} from '@angular/core';
import {HttpAuthService} from '../../../../services/http/http-auth.service';
import {MessagesService} from '../../../../services/messages.service';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../../../../dto/User/User';

@Component({
  selector: 'app-current-user-block',
  templateUrl: './current-user-block.component.html',
  styleUrls: ['./current-user-block.component.less']
})
export class CurrentUserBlockComponent implements OnInit {
  get tokenData() {
    return this.pTokenData;
  }

  set tokenData(value) {
    this.pTokenData = value;
  }

  currentUser: User = null;
  private pTokenData;
  admin = false;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(HttpAuthService) private httpAuthService: HttpAuthService,
              @Inject(CookieService) private cookieService: CookieService) {
  }

  private static isAdmin(roles: any) {
    return roles.includes('admin');
  }

  ngOnInit() {
    this.msgService.logoutSuccessMessage.subscribe(m => {
      this.currentUser = null;
    });
    if (localStorage.length > 0) {
      this.tokenData = JSON.parse(localStorage.getItem('tokenData'));
      if (this.tokenData.expiration < Date.now()) {localStorage.clear(); }
    }
    if (localStorage.length > 0 && this.tokenData.remember_token !== null) {
      this.httpAuthService.loginByRememberMeToken(this.tokenData.remember_token)
        .subscribe(user => {
          if (user) {
            this.msgService.loginSuccess(user.apiToken);
            this.getUserAndRoles(user);
          }
        });
    }
    this.msgService.loginSuccessMessage.subscribe(user => {
      this.getUserAndRoles(user);
      }
    );
  }

  private getUserAndRoles(user: User) {
    this.currentUser = user;
    this.httpAuthService.roles(user.apiToken).subscribe(roles => {
      if (CurrentUserBlockComponent.isAdmin(roles)) {
        this.msgService.adminLoggedIn();
      }
    });
  }
}
