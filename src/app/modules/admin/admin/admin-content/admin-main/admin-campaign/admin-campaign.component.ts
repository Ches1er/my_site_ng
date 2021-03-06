import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Campaign} from '../../../../../../dto/campaign/Campaign';
import {SalesArea} from '../../../../../../dto/sales-area/Sales-area';
import {Image} from '../../../../../../dto/images/Image';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {SalesAreaService} from '../../../../../../services/http/sales_area/sales-area.service';
import {MessagesService} from '../../../../../../services/messages.service';
import {CampaignService} from '../../../../../../services/http/campaign/campaign.service';
import {DatePipe} from '@angular/common';
import {AngularEditorCfg} from '../../../../../../config/angularEditorCfg';
import {HttpUrlEncodingCodec} from '@angular/common/http';

@Component({
  selector: 'app-admin-campaign',
  templateUrl: './admin-campaign.component.html',
  styleUrls: ['./admin-campaign.component.less']
})
export class AdminCampaignComponent implements OnInit {

  addChangeCampaignForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    salesArea: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    short_campaign: new FormControl('', Validators.required),
    img: new FormControl(''),
    date: new FormControl(''),
    expiration: new FormControl(''),
    full_campaign: new FormControl('', Validators.required)
  });
  datePipe = new DatePipe('en-EN');
  angularEditorCfg = new AngularEditorCfg();
  private pCampaigns: Array<Campaign> = [];
  private pSalesAreas: Array<SalesArea> = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  urlEncode = new HttpUrlEncodingCodec();
  config = this.angularEditorCfg.CONFIG;

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
      this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
    });
  }

  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  clearFields(e) {
    e.preventDefault();
    this.addChangeCampaignForm.patchValue({
      id: '',
      name: '',
      short_campaign: '',
      img: '',
      full_campaign: '',
      expiration: '',
      date: ''
    });
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    this.onSubmitResponse = null;
  }

  fillInCampaign(campaign: Campaign) {
    this.addChangeCampaignForm.patchValue({
        id: campaign.id,
        name: campaign.name,
        short_campaign: this.urlEncode.decodeValue(campaign.shortCampaign),
        img: campaign.imgId,
        full_campaign: this.urlEncode.decodeValue(campaign.fullCampaign),
        expiration: campaign.expiration,
        date: campaign.date,
        salesArea: campaign.salesAreaId
      }
    );
    this.choosenImg = new Image(campaign.imgId, 'name', campaign.img);
    this.campaignsService.allCampaign.subscribe(c => this.campaigns = c);
    this.whatHaveToDo = 'update';
  }

}
