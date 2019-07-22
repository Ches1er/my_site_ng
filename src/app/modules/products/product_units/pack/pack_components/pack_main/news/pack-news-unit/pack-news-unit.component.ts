import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../../../../../../dto/news/News';

@Component({
  selector: 'app-pack-news-unit',
  templateUrl: './pack-news-unit.component.html',
  styleUrls: ['./pack-news-unit.component.less']
})
export class PackNewsUnitComponent implements OnInit {

  @Input() news: News = null;

  constructor() {
  }

  ngOnInit() {
  }

}
