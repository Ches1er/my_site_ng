import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Campaign} from '../dto/campaign/Campaign';
import {Solution} from '../dto/solutions/Solution';
import {Product} from '../dto/products/Product';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  private pLoginWindowShow: Subject<null> = new Subject<null>();
  private pRegisterWindowShow: Subject<null> = new Subject<null>();
  private pLoginSuccess: Subject<string> = new Subject<string>();
  private pRegisterSuccess: Subject<Array<string>> = new Subject<Array<string>>();
  private pLogoutSuccess: Subject<null> = new Subject<null>();
  private pPackMenuShow: Subject<null> = new Subject<null>();
  private pProductsMenuUnitsShow: Subject<number> = new Subject<number>();
  private pChangedCurrentProduct: Subject<number> = new Subject<number>();
  private pChangeCurrentSolution: Subject<Solution> = new Subject<Solution>();
  private pChangeSolutionProduct: Subject<Product> = new Subject<Product>();
  private pChangeCurrentCampaign: Subject<Campaign> = new Subject<Campaign>();
  private pAdminLoggedIn: Subject<null> = new Subject<null>();
  private pImagesViewerShow: Subject<string> = new Subject<string>();
  private pGroutCalcShow: Subject<string> = new Subject<string>();

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

  get imagesViewerShow(): Subject<string> {
    return this.pImagesViewerShow;
  }

  // Auth

  get loginSuccessMessage() {
    return this.pLoginSuccess;
  }

  get registerSuccess(): Subject<Array<string>> {
    return this.pRegisterSuccess;
  }

  get logoutSuccessMessage() {
    return this.pLogoutSuccess;
  }

  get adminLoggedInMessage() {
    return this.pAdminLoggedIn;
  }

  // Menu

  get packMenuMessage() {
    return this.pPackMenuShow;
  }

  // Campaigns

  get changeCurrentCampaignMessage(): Subject<Campaign> {
    return this.pChangeCurrentCampaign;
  }

  // Products

  get productsMenuUnitsShowMessage() {
    return this.pProductsMenuUnitsShow;
  }

  get changedCurrentProduct() {
    return this.pChangedCurrentProduct;
  }

  // Tech Info

  get groutCalcShow(): Subject<string> {
    return this.pGroutCalcShow;
  }

  // Solutions

  get changeCurrentSolution(): Subject<Solution> {
    return this.pChangeCurrentSolution;
  }

  get changeSolutionProduct(): Subject<Product> {
    return this.pChangeSolutionProduct;
  }

  // FUNCTIONS

  // Auth

  public loginSuccess(token: string) {
    this.pLoginSuccess.next(token);
  }

  public registerSuccessMessage(data: Array<string>) {
    this.pRegisterSuccess.next(data);
  }

  public logoutSuccess() {
    this.pLogoutSuccess.next();
  }

  public adminLoggedIn() {
    this.pAdminLoggedIn.next();
  }

  // Windows

  public loginWindowShow() {
    this.pLoginWindowShow.next(null);
  }

  public registerWindowShow() {
    this.pRegisterWindowShow.next(null);
  }

  public imagesViewerShowMessage(path) {
    this.pImagesViewerShow.next(path);
  }

  // Menu

  public packMenuShow() {
    this.pPackMenuShow.next(null);
  }

  // Campaigns

  public changeCurrentCampaign(campaign: Campaign) {
    this.pChangeCurrentCampaign.next(campaign);
  }

  // Products

  public productsMenuUnitsShow(id: number) {
    this.pProductsMenuUnitsShow.next(id);
  }

  public setChangedCurrentProductId(id: number) {
    this.pChangedCurrentProduct.next(id);
  }

  // Tech Info

  public groutCalcShowMessage(definer: string) {
    this.pGroutCalcShow.next(definer);
  }

  // Solutions

  public changeCurrentSolutionMessage(solution: Solution) {
    this.pChangeCurrentSolution.next(solution);
  }

  public changeSolutionProductMessage(product: Product) {
    this.pChangeSolutionProduct.next(product);
  }


}
