import {Component, Inject, Input, OnInit} from '@angular/core';
import {HttpNewsService} from '../../../services/http/news/http-news.service';
import {MessagesService} from '../../../services/messages.service';
import {News} from '../../../dto/news/News';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.less']
})
export class NewsContentComponent implements OnInit {
  get findData(): any {
    return this.pFindData;
  }

  set findData(value: any) {
    this.pFindData = value;
  }

  private pSalesAreaDefiner = null;
  private pNews: Array<News> = [];
  private pCurrentNews: News = null;
  private pFindData = null;
  private pActiveBlock = null;

  constructor(@Inject(HttpNewsService) private newsService: HttpNewsService,
              @Inject(MessagesService) private msgService: MessagesService,
              private route: ActivatedRoute) {
  }

  get salesAreaDefiner(): any {
    return this.pSalesAreaDefiner;
  }

  set salesAreaDefiner(value: any) {
    this.pSalesAreaDefiner = value;
  }

  ngOnInit() {
    this.findData = null;
    this.route.data.subscribe(value => this.salesAreaDefiner = value.definer);
    this.route.queryParams.subscribe(routeData => {
      this.findData = routeData.findData;
    });
    if (this.salesAreaDefiner === 'build') {
      this.updateBuildNews();
    }
    if (this.salesAreaDefiner === 'pack') {
      this.updatePackNews();
    }
  }

  private getCurrentNewsFromFindData() {
    this.news.every(news => {
      if (news.id == this.findData) {
        this.currentNews = news;
        return false;
      } else {
        this.currentNews = this.news[0];
        return true;
      }
    });
  }

  private updateBuildNews() {
    this.newsService.buildingNews.subscribe(resp => {
      this.news = resp;
      if (this.findData) {
        this.getCurrentNewsFromFindData();
      } else {
        this.currentNews = resp[0];
      }
    });
  }

  private updatePackNews() {
    this.newsService.packNews.subscribe(resp => {
      this.news = resp;
      this.currentNews = resp[0];
    });
  }

  get news(): Array<News> {
    return this.pNews;
  }

  set news(value: Array<News>) {
    this.pNews = value;
  }

  get currentNews(): News {
    return this.pCurrentNews;
  }

  set currentNews(value: News) {
    this.pCurrentNews = value;
  }

  get activeBlock(): any {
    return this.pActiveBlock;
  }

  set activeBlock(value: any) {
    this.pActiveBlock = value;
  }

  changeCurrentNews(news: News, i) {
    this.currentNews = news;
    this.activeBlock = i;
  }
}
