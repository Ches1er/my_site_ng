import {Component, Input, OnInit} from '@angular/core';
import {Brand} from '../../../../../../../../../dto/Brand/Brand';

@Component({
  selector: 'app-build-prod-by-brands-menu',
  templateUrl: './build-prod-by-brands-menu.component.html',
  styleUrls: ['./build-prod-by-brands-menu.component.css']
})
export class BuildProdByBrandsMenuComponent implements OnInit {
  @Input() brands: Array<Brand> = [];
  constructor() { }

  ngOnInit() {
  }

}
