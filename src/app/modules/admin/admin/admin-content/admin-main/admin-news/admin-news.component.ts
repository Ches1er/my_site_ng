import {Component, OnInit} from '@angular/core';
import {HttpNewsService} from '../../../../../../services/http/news/http-news.service';
import {News} from '../../../../../../dto/news/News';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesAreaService} from '../../../../../../services/http/sales_area/sales-area.service';
import {SalesArea} from '../../../../../../dto/sales-area/Sales-area';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {MessagesService} from '../../../../../../services/messages.service';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {Image} from '../../../../../../dto/images/Image';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.less']
})
export class AdminNewsComponent implements OnInit {

  addChangeNewsForm: FormGroup = new FormGroup({
    salesArea: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    short_news: new FormControl('', Validators.required),
    img: new FormControl(''),
    full_news: new FormControl('', Validators.required),
  });
  private pNews: Array<News> = [];
  private pSalesAreas: Array<SalesArea> = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;

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

  ngOnInit() {
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.newsService.allNews.subscribe(news => this.news = news);
    this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      this.moveImageToTheFormControl(i);
      this.choosenImg = i;
    });
  }

  onSubmit() {
    this.newsService.addNews(this.addChangeNewsForm.value).subscribe(resp => console.log(resp));
    this.newsService.allNews.subscribe(news => this.news = news);
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
    this.addChangeNewsForm.patchValue({name: news.name, short_news: news.shortNews, img: news.imgId, full_news: news.fullNews});
    this.choosenImg = new Image(news.imgId, 'name', news.img);
    this.newsService.allNews.subscribe(n => this.news = n);
    this.whatHaveToDo = 'update';
  }

  clearFields() {
    this.addChangeNewsForm.patchValue({name: '', short_news: '', img: '', full_news: ''});
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
  }
}
