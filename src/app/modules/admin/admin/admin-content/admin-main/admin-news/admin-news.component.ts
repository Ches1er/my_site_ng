import {Component, OnInit} from '@angular/core';
import {HttpNewsService} from '../../../../../../services/http/news/http-news.service';
import {News} from '../../../../../../dto/news/News';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesAreaService} from '../../../../../../services/http/sales_area/sales-area.service';
import {SalesArea} from '../../../../../../dto/sales-area/Sales-area';
import {MessagesService} from '../../../../../../services/messages.service';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {Image} from '../../../../../../dto/images/Image';
import {AngularEditorCfg} from '../../../../../../config/angularEditorCfg';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.less']
})
export class AdminNewsComponent implements OnInit {

  addChangeNewsForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    salesArea: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    short_news: new FormControl('', Validators.required),
    img: new FormControl(''),
    full_news: new FormControl('', Validators.required),
  });
  angularEditorCfg = new AngularEditorCfg();
  private pNews: Array<News> = [];
  private pSalesAreas: Array<SalesArea> = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  config = this.angularEditorCfg.CONFIG;

  constructor(private msgService: MessagesService,
              private newsService: HttpNewsService,
              private adminMessageService: AdminMessagesService,
              private salesAreaService: SalesAreaService) {
  }

  get news(): Array<News> {
    return this.pNews;
  }

  set news(value: Array<News>) {
    this.pNews = value;
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
    this.updateNews();
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
      if (resp === 'this news exist') {
        this.onSubmitResponse = 'Новость с таким названием уже существует. Вы можете изменить ее, выбрав из списка слева.';
      }
      this.updateNews();
    });
  }

  private updateNews() {
    this.newsService.allNews.subscribe(news => this.news = news);
  }

  onSubmit() {
    this.newsService.addNews(this.addChangeNewsForm.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.newsCampaignAddedMessage(resp);
    });
  }

  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeNewsForm.patchValue({
      img: image.id
    });
  }

  fillInNews(news: News) {
    this.addChangeNewsForm.patchValue({
      id: news.id,
      name: news.name,
      short_news: news.shortNews,
      img: news.imgId,
      full_news: news.fullNews,
      salesArea: news.salesAreaId
    });
    this.choosenImg = new Image(news.imgId, 'name', news.img);
    this.newsService.allNews.subscribe(n => this.news = n);
    this.onSubmitResponse = null;
    this.whatHaveToDo = 'update';
  }

  clearFields(e) {
    this.addChangeNewsForm.patchValue({id: '', name: '', short_news: '', img: '', full_news: ''});
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    e.preventDefault();
  }
}
