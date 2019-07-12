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
  private pPackMenuShow: Subject<null> = new Subject<null>();

  constructor() {
  }

  // GETTERS

  // Windows

  get loginWindowShowMessage() {
    return this.pLoginWindowShow;
  }

  get registerWindowShowMessage() {
    return this.pRegisterWindowShow;
  }

  // AUTH

  get loginSuccessMessage() {
    return this.pLoginSuccess;
  }

  get logoutSuccessMessage() {
    return this.pLogoutSuccess;
  }

  // MENU

  get packMenuMessage() {
    return this.pPackMenuShow;
  }

  // FUNCTIONS

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

  // Menu

  public packMenuShow() {
    this.pPackMenuShow.next(null);
  }
}
