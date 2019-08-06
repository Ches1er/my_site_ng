import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../../dto/news/News';

@Component({
  selector: 'app-news-content-unit',
  templateUrl: './news-content-unit.component.html',
  styleUrls: ['./news-content-unit.component.less']
})
export class NewsContentUnitComponent implements OnInit {
  @Input() news: News = null;
  constructor() { }

  ngOnInit() {
  }

}
