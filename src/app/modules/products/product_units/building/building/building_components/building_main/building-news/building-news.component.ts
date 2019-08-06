import {Component, Inject, OnInit} from '@angular/core';
import {News} from '../../../../../../../../dto/news/News';
import {HttpNewsService} from '../../../../../../../../services/http/news/http-news.service';
import {MessagesService} from '../../../../../../../../services/messages.service';

@Component({
  selector: 'app-building-news',
  templateUrl: './building-news.component.html',
  styleUrls: ['./building-news.component.less']
})
export class BuildingNewsComponent implements OnInit {

  private pNews: Array<News> = [];
  private pCurrentNews: News = null;
  private pActiveBlock = null;

  constructor(@Inject(HttpNewsService) private newsService: HttpNewsService,
              @Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
    this.updateNews();
  }

  private updateNews() {
    this.newsService.buildingNews.subscribe(resp => {
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
