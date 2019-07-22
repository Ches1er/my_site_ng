import {Component, Inject, OnInit} from '@angular/core';
import {HttpNewsService} from '../../../../../../../services/http/news/http-news.service';
import {MessagesService} from '../../../../../../../services/messages.service';
import {News} from '../../../../../../../dto/news/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  private pNews: Array<News> = [];
  private pCurrentNews: News = null;

  constructor(@Inject(HttpNewsService) private newsService: HttpNewsService,
              @Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
    this.updateNews();
  }

  private updateNews() {
    this.newsService.packNews.subscribe(resp => {
      this.news = resp;
      this.currentNews = resp[resp.length - 1];
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

  changeCurrentNews(news: News) {
    this.currentNews = news;
  }
}
