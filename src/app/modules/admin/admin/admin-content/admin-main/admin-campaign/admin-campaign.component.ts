import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Campaign} from '../../../../../../dto/campaign/Campaign';
import {SalesArea} from '../../../../../../dto/sales-area/Sales-area';
import {Image} from '../../../../../../dto/images/Image';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {SalesAreaService} from '../../../../../../services/http/sales_area/sales-area.service';
import {MessagesService} from '../../../../../../services/messages.service';
import {CampaignService} from '../../../../../../services/http/campaign/campaign.service';
import {DatePipe} from '@angular/common';
import {log} from 'util';

@Component({
  selector: 'app-admin-campaign',
  templateUrl: './admin-campaign.component.html',
  styleUrls: ['./admin-campaign.component.less']
})
export class AdminCampaignComponent implements OnInit {

  addChangeCampaignForm: FormGroup = new FormGroup({
    salesArea: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    short_campaign: new FormControl('', Validators.required),
    img: new FormControl(''),
    date: new FormControl(''),
    expiration: new FormControl(''),
    full_campaign: new FormControl('', Validators.required)
  });
  datePipe = new DatePipe('en-EN');
  private pCampaigns: Array<Campaign> = [];
  private pSalesAreas: Array<SalesArea> = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
  };

  constructor(private msgService: MessagesService,
              private campaignsService: CampaignService,
              private adminMessageService: AdminMessagesService,
              private salesAreaService: SalesAreaService) {
  }

  get campaigns(): Array<Campaign> {
    return this.pCampaigns;
  }

  set campaigns(value: Array<Campaign>) {
    this.pCampaigns = value;
  }

  get salesAreas(): Array<SalesArea> {
    return this.pSalesAreas;
  }

  set salesAreas(value: Array<SalesArea>) {
    this.pSalesAreas = value;
  }

  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }

  ngOnInit() {
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.updateCampaigns();
    this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      this.moveImageToTheFormControl(i);
      this.choosenImg = i;
    });
    this.adminMessageService.newsCampaignAdded.subscribe(resp => {
        if (resp === 'update success') {
          this.onSubmitResponse = 'Данные успешно обновлены';
        }
        if (resp === 'insert success') {
          this.onSubmitResponse = 'Данные успешно добавлены';
        }
        if (resp === 'error') {
          this.onSubmitResponse = 'Ой, что-то пошло не так! Повторите попытку.';
        }
        this.updateCampaigns();
      }
    );
  }

  private updateCampaigns() {
    this.campaignsService.allCampaign.subscribe(campaigns => this.campaigns = campaigns);
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeCampaignForm.patchValue({
      img: image.id
    });
  }

  onSubmit() {
    if (this.whatHaveToDo === 'add') {
      const now = Date.now();
      this.addChangeCampaignForm.patchValue({date: now});
    }
    this.campaignsService.addCampaign(this.addChangeCampaignForm.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.newsCampaignAddedMessage(resp);
    });
  }

  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  clearFields() {
    this.addChangeCampaignForm.patchValue({name: '', short_campaign: '', img: '', full_campaign: '', expiration: '', date: ''});
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
  }

  fillInCampaign(campaign: Campaign) {
    this.addChangeCampaignForm.patchValue({
        name: campaign.name,
        short_campaign: campaign.shortCampaign,
        img: campaign.imgId,
        full_campaign: campaign.fullCampaign,
        expiration: campaign.expiration,
        date: campaign.date
      }
    );
    this.choosenImg = new Image(campaign.imgId, 'name', campaign.img);
    this.campaignsService.allCampaign.subscribe(c => this.campaigns = c);
    this.whatHaveToDo = 'update';
  }

}
