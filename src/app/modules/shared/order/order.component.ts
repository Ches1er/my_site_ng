import {Component, OnInit} from '@angular/core';
import {SaleService} from '../../../services/http/sale/sale.service';
import {SalesAreaService} from '../../../services/http/sales_area/sales-area.service';
import {FormArray, FormGroup} from '@angular/forms';
import {BrandsService} from '../../../services/http/brands/brands.service';
import {SaleProduct} from '../../../dto/sale_products/SaleProduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  get amount(): any {
    return this.pAmount;
  }

  set amount(value: any) {
    this.pAmount = value;
  }

  get currentQty(): number {
    return this.pCurrentQty;
  }

  set currentQty(value: number) {
    this.pCurrentQty = value;
  }

  get products() {
    return this.pProducts;
  }

  set products(value) {
    this.pProducts = value;
  }

  get brands() {
    return this.pBrands;
  }

  set brands(value) {
    this.pBrands = value;
  }

  get currentProduct() {
    return this.pCurrentProduct;
  }

  set currentProduct(value) {
    this.pCurrentProduct = value;
  }

  private pBrands;
  private pProducts: Array<SaleProduct> = null;
  private pCurrentProduct: SaleProduct = null;
  private pCurrentQty = 0;
  private pAmount = 0;
  orderForm: FormGroup = new FormGroup({
      brands: new FormArray([]),
      salesProducts: new FormArray([]),
      price: new FormArray([]),
      measure: new FormArray([]),
      amount: new FormArray([]),
    }
  );
  order = [];

  constructor(private brandService: BrandsService, private saleService: SaleService) {
  }

  ngOnInit() {
    this.currentProduct = null;
    this.products = null;
    this.brandService.allBrands.subscribe(b => {
      this.brands = b;
      this.saleService.saleProductsByBrand(b[0].id).subscribe(p => {
        this.products = p;
        this.currentProduct = p[0];
      });
    });
  }

  salesAreaChoosen(value) {
    this.saleService.saleProductsByBrand(value).subscribe(p => {
      this.products = p;
    });
  }

  productChoosen(value) {
    this.currentProduct = this.products[parseInt(value) - 1];
  }

  calculateAmount() {
    this.amount = this.currentProduct.price * this.pCurrentQty;
  }
}
