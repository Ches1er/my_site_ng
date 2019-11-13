import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../../../../../../dto/User/User';
import {HttpAuthService} from '../../../../../../../services/http/http-auth.service';
import {MessagesService} from '../../../../../../../services/messages.service';

@Component({
  selector: 'app-building-nav',
  templateUrl: './building-nav.component.html',
  styleUrls: ['./building-nav.component.less']
})
export class BuildingNavComponent implements OnInit {
  get user(): boolean {
    return this.pUser;
  }

  set user(value: boolean) {
    this.pUser = value;
  }

  private pUser = false;

  constructor(@Inject(HttpAuthService) private authService: HttpAuthService,
              private msgService: MessagesService) {
  }

  ngOnInit() {
    this.user = null;
    this.getUser();
    this.msgService.loginSuccessMessage.subscribe(token => {
      this.user = true;
    });
  }

  private getUser(): void {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.authService.user()
        .subscribe(u => {
          if (u) {
            this.user = u;
          }
        });
    }
  }

}
