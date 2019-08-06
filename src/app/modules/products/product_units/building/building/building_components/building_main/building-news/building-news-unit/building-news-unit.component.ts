import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../../../../../../../dto/news/News';

@Component({
  selector: 'app-building-news-unit',
  templateUrl: './building-news-unit.component.html',
  styleUrls: ['./building-news-unit.component.less']
})
export class BuildingNewsUnitComponent implements OnInit {
  @Input() news: News = null;

  constructor() {
  }

  ngOnInit() {
  }

}
