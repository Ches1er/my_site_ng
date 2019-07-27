import {Component, Inject, OnInit} from '@angular/core';
import {BrandsService} from '../../../../../../../../services/http/brands/brands.service';
import {Brand} from '../../../../../../../../dto/Brand/Brand';

@Component({
  selector: 'app-building-production-by-brand',
  templateUrl: './building-production-by-brand.component.html',
  styleUrls: ['./building-production-by-brand.component.css']
})
export class BuildingProductionByBrandComponent implements OnInit {

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
    this.brandService.buildBrands.subscribe(brands => this.brands = brands);
  }


}
