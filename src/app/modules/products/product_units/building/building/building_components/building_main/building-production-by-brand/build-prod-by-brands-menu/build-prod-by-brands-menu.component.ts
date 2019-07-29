import {Component, Inject, Input, OnInit} from '@angular/core';
import {Brand} from '../../../../../../../../../dto/Brand/Brand';
import {MessagesService} from '../../../../../../../../../services/messages.service';

@Component({
  selector: 'app-build-prod-by-brands-menu',
  templateUrl: './build-prod-by-brands-menu.component.html',
  styleUrls: ['./build-prod-by-brands-menu.component.css']
})
export class BuildProdByBrandsMenuComponent implements OnInit {
  @Input() brands: Array<Brand> = [];
  constructor(@Inject(MessagesService) private msgService: MessagesService) { }

  ngOnInit() {
  }
  showGroupContent(id: number) {
    this.msgService.productsMenuUnitsShow(id);
  }

}
