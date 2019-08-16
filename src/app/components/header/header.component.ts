import {Component, Inject, OnInit} from '@angular/core';
import {ImagesService} from '../../services/http/images/images.service';
import {Image} from '../../dto/images/Image';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  private pLogo: Image;
  constructor(@Inject(ImagesService) private imgService: ImagesService) { }

  ngOnInit() {
    this.imgService.image('logo.png').subscribe(image => this.logo = image);
  }

  get logo() {
    return this.pLogo;
  }

  set logo(value) {
    this.pLogo = value;
  }

}
