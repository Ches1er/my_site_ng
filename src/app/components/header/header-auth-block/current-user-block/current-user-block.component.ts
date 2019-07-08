import {Component, Inject, OnInit} from '@angular/core';
import {HttpAuthService} from '../../../../services/http/http-auth.service';
import {MessagesService} from '../../../../services/messages.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-current-user-block',
  templateUrl: './current-user-block.component.html',
  styleUrls: ['./current-user-block.component.css']
})
export class CurrentUserBlockComponent implements OnInit {
  currentUser = null;
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
      this.admin = false;
    });

    if (this.cookieService.check('remember_token')) {
      console.log(this.cookieService.get('remember_token'));
      this.httpAuthService.loginByRememberMeToken(this.cookieService.get('remember_token'))
        .subscribe(resp => {
          console.log(resp);
          if (resp) {
            this.httpAuthService.user(resp.api_token).subscribe(user => this.currentUser = user);
            this.httpAuthService.roles(resp.api_token).subscribe(roles => {
              this.admin = CurrentUserBlockComponent.isAdmin(roles);
            });
          }
        });
    }
    this.msgService.loginSuccessMessage.subscribe(token => {
        this.httpAuthService.user(token).subscribe(user => this.currentUser = user);
        this.httpAuthService.roles(token).subscribe(roles => {
          this.admin = CurrentUserBlockComponent.isAdmin(roles);
        });
      }
    );
  }


}
