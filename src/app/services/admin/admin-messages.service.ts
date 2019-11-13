import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Image} from '../../dto/images/Image';
import {Client} from '../../dto/clients/Client';
import {BuildObject} from '../../dto/objects/Build_object';

@Injectable({
  providedIn: 'root'
})
export class AdminMessagesService {

  private pImagesPickerWindowShow: Subject<null> = new Subject<null>();
  private pImageHasChoosen: Subject<Image> = new Subject<Image>();
  private pNewsCampaignAdded: Subject<string> = new Subject<string>();
  private pBrandAdded: Subject<null> = new Subject<null>();
  private pApplGroupAdded: Subject<null> = new Subject<null>();
  private pClientHasChoosen: Subject<Client> = new Subject<Client>();
  private pObjectHasChoosen: Subject<BuildObject> = new Subject<BuildObject>();
  private pClientObjHasAddedUpdated: Subject<null> = new Subject<null>();
  private pDiscountsUpdated: Subject<null> = new Subject<null>();

  constructor() {
  }

  // GETTERS

  // Windows
  get imagesPickerWindowShowMessage(): Subject<null> {
    return this.pImagesPickerWindowShow;
  }

  get imageHasChoosen(): Subject<Image> {
    return this.pImageHasChoosen;
  }

  // Campaign_News

  get newsCampaignAdded(): Subject<string> {
    return this.pNewsCampaignAdded;
  }

  // Brand_Appl

  get brandAdded(): Subject<string> {
    return this.pBrandAdded;
  }

  get applGroupAdded(): Subject<null> {
    return this.pApplGroupAdded;
  }

  // Clients_objects

  get clientHasChoosen(): Subject<Client> {
    return this.pClientHasChoosen;
  }

  get objectHasChoosen(): Subject<BuildObject> {
    return this.pObjectHasChoosen;
  }
  get clientObjHasAddedUpdated(): Subject<null> {
    return this.pClientObjHasAddedUpdated;
  }
  get discountsUpdated(): Subject<null> {
    return this.pDiscountsUpdated;
  }

  // FUNCTIONS

  // Images Picker

  public imagesPickerWindowShow() {
    this.pImagesPickerWindowShow.next();
  }

  public imageHasChoosenMessage(image: Image) {
    this.pImageHasChoosen.next(image);
  }

  // Campaign_News

  public newsCampaignAddedMessage(response: string) {
    this.pNewsCampaignAdded.next(response);
  }

  // Brand_Appl

  public brandAddedMessage() {
    this.pBrandAdded.next();
  }

  public applGroupAddedMessage() {
    this.pApplGroupAdded.next();
  }

  // Clients_objects

  public clientHasChoosenMessege(client: Client) {
    this.pClientHasChoosen.next(client);
  }
  public objectHasChoosenMessage(obj: BuildObject) {
    this.pObjectHasChoosen.next(obj);
  }
  public clientObjHasAddedUpdatedMessage(){
    this.pClientObjHasAddedUpdated.next();
  }

  // Discounts

  public discountsHasUpdatedMessage() {
    this.pDiscountsUpdated.next();
  }

}
