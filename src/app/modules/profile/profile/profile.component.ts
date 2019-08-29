import { Component, OnInit } from '@angular/core';
import {HttpAuthService} from '../../../services/http/http-auth.service';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../../../dto/User/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  private pCurrentUser: User = null;
  constructor(private httpAuthService: HttpAuthService) { }

  ngOnInit() {
    this.getUser();
  }
  get currentUser(): User {
    return this.pCurrentUser;
  }

  set currentUser(value: User) {
    this.pCurrentUser = value;
  }
  private getUser(): void {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.httpAuthService.user(data.api_token)
        .subscribe(u => {
          if (u) {
            this.currentUser = u;
          }
        });
    }
  }
}
