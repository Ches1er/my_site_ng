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
  currentUser: User = null;
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
    if (this.cookieService.get('remember_token') !== null && this.cookieService.check('remember_token')) {
      this.httpAuthService.loginByRememberMeToken(this.cookieService.get('remember_token'))
        .subscribe(resp => {
          if (resp) {
            if (!this.cookieService.check('api_token')) {this.cookieService.set('api_token', resp.api_token, 0.02); }
            this.msgService.loginSuccess(resp.api_token);
            this.getUserAndRoles(resp.api_token);
          }
        });
    }
    this.msgService.loginSuccessMessage.subscribe(token => {
      this.getUserAndRoles(token);
      }
    );
  }

  private getUserAndRoles(apiToken: string) {
    this.httpAuthService.user(apiToken).subscribe(user => this.currentUser = user);
    this.httpAuthService.roles(apiToken).subscribe(roles => {
      if (CurrentUserBlockComponent.isAdmin(roles)) {
        this.msgService.adminLoggedIn();
      }
    });
  }
}
