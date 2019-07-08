import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private pLoginWindowShow: Subject<null> = new Subject<null>();
  private pRegisterWindowShow: Subject<null> = new Subject<null>();
  private pLoginSuccess: Subject<string> = new Subject<string>();
  private pLogoutSuccess: Subject<null> = new Subject<null>();

  constructor() {
  }

  get loginWindowShowMessage() {
    return this.pLoginWindowShow;
  }

  get registerWindowShowMessage() {
    return this.pRegisterWindowShow;
  }

  get loginSuccessMessage() {
    return this.pLoginSuccess;
  }

  get logoutSuccessMessage() {
    return this.pLogoutSuccess;
  }

  // Auth

  public loginSuccess(token: string) {
    this.pLoginSuccess.next(token);
  }
  public logoutSuccess() {
    this.pLogoutSuccess.next();
  }

  // Windows

  public loginWindowShow() {
    this.pLoginWindowShow.next(null);
  }

  public registerWindowShow() {
    this.pRegisterWindowShow.next(null);
  }
}
