import {Component, Inject, OnInit} from '@angular/core';
import {Brand} from '../../../../../../../dto/Brand/Brand';
import {BrandsService} from '../../../../../../../services/http/brands/brands.service';

@Component({
  selector: 'app-production-by-brand',
  templateUrl: './production-by-brand.component.html',
  styleUrls: ['./production-by-brand.component.css']
})
export class ProductionByBrandComponent implements OnInit {
  private pBrands: Array<Brand> = [];
  private currentProduct = null;

  constructor(@Inject(BrandsService) private brandService: BrandsService) {
  }

  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
  }

  ngOnInit() {
    this.updateBrands();
  }

  private updateBrands() {
    this.brandService.packBrands.subscribe(brands => this.brands = brands);
  }

}
