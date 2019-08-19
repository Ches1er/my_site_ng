import {Component, Inject, OnInit} from '@angular/core';
import {BrandsService} from '../../../services/http/brands/brands.service';
import {Brand} from '../../../dto/Brand/Brand';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {

  private pBrands: Array<Brand> = [];
  constructor(@Inject(BrandsService) private brandService: BrandsService) { }

  ngOnInit() {
    this.brandService.allBrands.subscribe(b => this.brands = b);
  }
  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
  }

}
