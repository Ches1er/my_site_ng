import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Image} from '../../dto/images/Image';

@Injectable({
  providedIn: 'root'
})
export class AdminMessagesService {

  private pImagesPickerWindowShow: Subject<null> = new Subject<null>();
  private pImageHasChoosen: Subject<Image> = new Subject<Image>();
  private pNewsCampaignAdded: Subject<string> = new Subject<string>();

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

}
