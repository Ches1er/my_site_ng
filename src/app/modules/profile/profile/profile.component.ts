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
  constructor(private httpAuthService: HttpAuthService, private cookieService: CookieService) { }

  ngOnInit() {
    this.httpAuthService.user(this.cookieService.get('api_token')).subscribe(user => this.currentUser = user);
  }
  get currentUser(): User {
    return this.pCurrentUser;
  }

  set currentUser(value: User) {
    this.pCurrentUser = value;
  }

}
