import {Component, Inject, OnInit} from '@angular/core';
import {ImagesService} from '../../../services/http/images/images.service';
import {Image} from '../../../dto/images/Image';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  private pImg: Image = null;
  constructor(@Inject(ImagesService) private imgService: ImagesService) { }

  ngOnInit() {
    this.imgService.image('404.jpg').subscribe(i => this.img = i);
  }


  get img(): Image {
    return this.pImg;
  }

  set img(value: Image) {
    this.pImg = value;
  }
}
