import {Component, OnInit} from '@angular/core';
import {SaleService} from '../../../services/http/sale/sale.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BrandsService} from '../../../services/http/brands/brands.service';
import {SaleProduct} from '../../../dto/sale_products/SaleProduct';
import {stringify} from 'querystring';
import {User} from '../../../dto/User/User';
import {HttpAuthService} from '../../../services/http/http-auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  get user(): User {
    return this.pUser;
  }

  set user(value: User) {
    this.pUser = value;
  }

  get orderPosition(): number {
    return this.pOrderPosition;
  }

  set orderPosition(value: number) {
    this.pOrderPosition = value;
  }

  private pBrands;
  private pProducts: Array<SaleProduct> = null;
  private pCurrentProduct: SaleProduct = null;
  private pSumAmount = 0;
  private pOrderPosition: number;
  private pUser: User = null;
  orderForm: FormGroup = new FormGroup({
      brands: new FormControl(),
      productId: new FormControl(),
      productName: new FormControl(''),
      price: new FormControl(''),
      measure: new FormControl(),
      qty: new FormControl(1),
      amount: new FormControl()
    }
  );
  order = [];

  constructor(private brandService: BrandsService,
              private saleService: SaleService,
              private authService: HttpAuthService) {
  }

  private getUser(): void {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.authService.user(data.api_token)
        .subscribe(u => this.user = u);
    }
  }

  ngOnInit() {
    this.orderPosition = null;
    this.currentProduct = null;
    this.user = null;
    this.getUser();
    this.sumAmount = 0;
    this.brandService.allBrands.subscribe(b => {
      this.brands = b;
    });
    this.orderForm.get('brands').valueChanges.subscribe(value => {
      this.saleService.saleProductsByBrand(this.brands[value - 1].id).subscribe(p => {
        this.products = null;
        this.products = p;
        this.currentProduct = p[0];
        if (!this.orderPosition) {
          this.orderForm.patchValue({
              productName: this.currentProduct.name,
              productId: this.currentProduct.id,
              price: this.currentProduct.price
            }
          );
        }
      });
    });
    this.orderForm.get('productId').valueChanges.subscribe(value => {
      this.products.forEach(e => {
        if (e.id == value) {
          this.currentProduct = e;
          this.orderForm.patchValue({
            productName: e.name,
            productId: e.id,
            price: e.price
          }, {emitEvent: false});
        }
      });
    });
  }

  get sumAmount(): number {
    return this.pSumAmount;
  }

  set sumAmount(value: number) {
    this.pSumAmount = value;
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

  salesAreaChoosen(value) {
    this.saleService.saleProductsByBrand(value).subscribe(p => {
      this.products = p;
    });
  }

  productChoosen(value) {
    this.currentProduct = this.products[parseInt(value) - 1];
  }

  addToOrder() {
    this.sumAmount = (this.sumAmount + parseInt(this.orderForm.value.qty) * parseInt(this.orderForm.value.price));
    const a = parseInt(this.orderForm.value.qty) * parseInt(this.orderForm.value.price);
    this.orderForm.patchValue({amount: a.toString()});
    this.order.push({
      brandId: parseInt(this.orderForm.value.brands),
      brand: this.brands[this.orderForm.value.brands - 1].name,
      productId: parseInt(this.orderForm.value.productId),
      productName: this.orderForm.value.productName,
      price: this.orderForm.value.price,
      qty: this.orderForm.value.qty,
      amount: this.orderForm.value.amount
    });
  }

  changeOrderItem(i) {
    this.orderPosition = i;
    this.order.map(e => {
      if (e.productId === i) {
        this.orderForm.patchValue({
          brands: e.brandId,
          productId: e.productId,
          productName: e.productName,
          price: e.price,
          measure: '',
          qty: e.qty,
          amount: e.amount
        });
      }
    });
  }

  delOrderPos(i) {
    this.order.splice(i, 1);
  }

  updateOrder(event) {
    event.preventDefault();
    this.sumAmount = 0;
    this.order.map(e => {
      this.sumAmount = this.sumAmount + parseInt(e.amount);
      if (e.productId === this.orderPosition) {
        const a = parseInt(this.orderForm.value.qty) * parseInt(this.orderForm.value.price);
        this.orderForm.patchValue({amount: a.toString()});
        e.brandId = parseInt(this.orderForm.value.brands),
          e.brand = this.brands[this.orderForm.value.brands - 1].name,
          e.productId = parseInt(this.orderForm.value.productId),
          e.productName = this.orderForm.value.productName,
          e.price = this.orderForm.value.price,
          e.qty = this.orderForm.value.qty,
          e.amount = this.orderForm.value.amount;
      }
    });
  }

  sendByEmail(event) {
    event.preventDefault();
    this.checkUser();
    const strOrder = this.convertOrderToStr();
    this.saleService.sendOrderByEmail(strOrder, this.user.id, this.sumAmount)
      .subscribe(resp => console.log(resp));
  }

  saveOrder(event) {
    this.checkUser();
    event.preventDefault();
    const strOrder = this.convertOrderToStr();
    this.saleService.saveOrder(strOrder, this.user.id)
      .subscribe(resp => console.log(resp));
  }

  private checkUser() {
    if (!this.user) {
      this.getUser();
    }
  }

  private convertOrderToStr(): any {
    const strOrder = [];
    this.order.forEach(item => {
      strOrder.push(JSON.stringify(item));
    });
    return strOrder.join(';');
  }
}
