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
  private pProductsMenuUnitsShow: Subject<number> = new Subject<number>();
  private pChangedCurrentProduct: Subject<number> = new Subject<number>();

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



  // Auth

  get loginSuccessMessage() {
    return this.pLoginSuccess;
  }

  get logoutSuccessMessage() {
    return this.pLogoutSuccess;
  }

  // Menu

  get packMenuMessage() {
    return this.pPackMenuShow;
  }

  // Products

  get productsMenuUnitsShowMessage() {
    return this.pProductsMenuUnitsShow;
  }

  get changedCurrentProduct() {
    return this.pChangedCurrentProduct;
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

  // Products

  public productsMenuUnitsShow(id: number) {
    this.pProductsMenuUnitsShow.next(id);
  }

  public setChangedCurrentProductId(id: number) {
    this.pChangedCurrentProduct.next(id);
  }

}
