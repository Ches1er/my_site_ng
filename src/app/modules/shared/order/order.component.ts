import {Component, OnInit} from '@angular/core';
import {SaleService} from '../../../services/http/sale/sale.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BrandsService} from '../../../services/http/brands/brands.service';
import {SaleProduct} from '../../../dto/sale_products/SaleProduct';
import {User} from '../../../dto/User/User';
import {HttpAuthService} from '../../../services/http/http-auth.service';
import {MessagesService} from '../../../services/messages.service';
import {OrderUnit} from './OrderUnit';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {

  private pBrands;
  private pProducts: Array<SaleProduct> = null;
  private pCurrentProduct: SaleProduct = null;
  private pSumAmount = 0;
  private pOrderPosition: number;
  private pUser: User = null;
  orderForm: FormGroup = new FormGroup({
      brands: new FormControl(''),
      productId: new FormControl(''),
      productName: new FormControl(''),
      price: new FormControl(''),
      measure: new FormControl(),
      qty: new FormControl(1),
      amount: new FormControl()
    }
  );
  order: Array<OrderUnit> = [];

  constructor(private brandService: BrandsService,
              private saleService: SaleService,
              private authService: HttpAuthService,
              private msgService: MessagesService) {
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
        this.orderForm.patchValue({
          productName: '',
          productId: '',
          price: ''
        }, {emitEvent: false});
      });
    });
    this.orderForm.get('productId').valueChanges.subscribe(value => {
      this.products.forEach(e => {
        if (e.id == value) {
          this.currentProduct = e;
          this.orderForm.patchValue({
            productName: this.currentProduct.name,
            productId: this.currentProduct.id,
            price: this.currentProduct.price
          }, {emitEvent: false});
        }
      });
    });
  }

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

  private getUser(): void {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.authService.user(data.api_token)
        .subscribe(u => this.user = u);
    }
  }

  addToOrder() {
    this.sumAmount = (this.sumAmount + parseInt(this.orderForm.value.qty, 10) * parseInt(this.orderForm.value.price, 10));
    const a = parseInt(this.orderForm.value.qty, 10) * parseInt(this.orderForm.value.price, 10);
    this.orderForm.patchValue({amount: a.toString()});
    const orderUnit = new OrderUnit(
      parseInt(this.orderForm.value.brands, 10),
      this.brands[this.orderForm.value.brands - 1].name,
      parseInt(this.orderForm.value.productId, 10),
      this.orderForm.value.productName,
      this.orderForm.value.price,
      this.orderForm.value.qty,
      parseInt(this.orderForm.value.amount, 10)
    );
    this.order.push(orderUnit);
  }

  changeOrderItem(i) {
    this.orderPosition = i;
    this.order.map(e => {
      if (e.productId === i) {
        this.orderForm.patchValue({
          brands: e.brandId.toString(),
          productId: e.productId.toString(),
          productName: e.productName.toString(),
          price: e.price.toString(),
          measure: '',
          qty: e.qty.toString(),
          amount: e.amount.toString()
        }, {emitEvent: false});
        this.saleService.saleProductsByBrand(e.brandId).subscribe(p => this.products = p);
      }
    });
  }

  delOrderPos(i) {
    this.order.splice(i, 1);
  }

  updateOrder(event) {
    event.preventDefault();
    this.order.map(e => {
      if (e.productId === this.orderPosition) {
        const a = parseInt(this.orderForm.value.qty, 10) * parseInt(this.orderForm.value.price, 10);
        this.orderForm.patchValue({amount: a.toString()});
        e.brandId = parseInt(this.orderForm.value.brands, 10),
          e.brand = this.brands[this.orderForm.value.brands - 1].name,
          e.productId = parseInt(this.orderForm.value.productId, 10),
          e.productName = this.orderForm.value.productName,
          e.price = this.orderForm.value.price,
          e.qty = this.orderForm.value.qty,
          e.amount = parseInt(this.orderForm.value.amount, 10);
      }
    });
    this.sumAmount = this.order.reduce((sum, current) => sum + current.amount, 0);
  }

  sendByEmail(event) {
    event.preventDefault();
    this.checkUser();
    const strOrder = this.convertOrderToStr();
    this.saleService.sendOrderByEmail(strOrder, this.user.id, this.sumAmount)
      .subscribe(resp => {
        if (resp === 'email send') {
          const message = 'Уважаемый ' + this.user.name + ', Ваш заказ отправлен на вашу почту. Наш менеджер свяжется с вами, для подтверждения заказа.';
          this.msgService.infoWindowShowMessage(message);
        }
      });
  }

  saveOrder(event) {
    this.checkUser();
    event.preventDefault();
    const strOrder = this.convertOrderToStr();
    this.saleService.saveOrder(strOrder, this.user.id)
      .subscribe(resp => {
        if (resp === 'insert success') {
          const message = 'Уважаемый ' + this.user.name + ', Ваш заказ успешно сохранен. Для просмотра своих заказов, зайдите в Профиль->Заказы';
          this.msgService.infoWindowShowMessage(message);
        }
      });
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
