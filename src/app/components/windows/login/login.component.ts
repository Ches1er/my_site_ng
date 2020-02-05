import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpAuthService} from '../../../services/http/http-auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // "loading" variable use for ngx-loading component
  public loading = false;
  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl('')
  });
  visible = false;
  error = null;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(HttpAuthService) private httpAuthService: HttpAuthService,
              @Inject(CookieService) private cookieService: CookieService) {
  }

  ngOnInit() {
    this.msgService.loginWindowShowMessage.subscribe(m => this.visible = true);
  }

  public cancel() {
    this.visible = false;
  }

  public onSubmit() {
    this.loading = true;
    this.httpAuthService.login(this.loginForm.value)
      .subscribe(resp => {
        if (resp.error) {
          this.error = resp;
          this.loading = false;
        } else {
          this.msgService.loginSuccess(resp);
          // 30 min expiration time. 1*24*60*30
          const tokenData = {
            api_token: resp.apiToken,
            remember_token: resp.rememberToken,
            expiration: Date.now() + (30 * 60 * 1000)
          };
          localStorage.setItem('tokenData', JSON.stringify(tokenData));
          this.loading = false;
          this.visible = false;
        }
      });
  }

  public registerFormShow(event) {
    event.preventDefault();
    this.cancel();
    this.msgService.registerWindowShow();
  }
}
