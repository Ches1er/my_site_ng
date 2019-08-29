import {Component, OnInit} from '@angular/core';
import {SaleService} from '../../../../services/http/sale/sale.service';
import {OrderResponse} from '../../../../dto/Order/Order_response';
import {OrderUnit} from '../../../shared/order/OrderUnit';
import {FormArray} from '@angular/forms';
import {HttpAuthService} from '../../../../services/http/http-auth.service';
import {User} from '../../../../dto/User/User';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.less']
})
export class ProfileOrdersComponent implements OnInit {
  get ordersArr(): Array<Array<OrderUnit>> {
    return this.pOrdersArr;
  }

  set ordersArr(value: Array<Array<OrderUnit>>) {
    this.pOrdersArr = value;
  }

  get ordersStr(): OrderResponse {
    return this.pOrdersStr;
  }

  set ordersStr(value: OrderResponse) {
    this.pOrdersStr = value;
  }
  get token(): string {
    return this.pToken;
  }

  set token(value: string) {
    this.pToken = value;
  }
  get currentUser(): User {
    return this.pCurrentUser;
  }

  set currentUser(value: User) {
    this.pCurrentUser = value;
  }

  private pOrdersStr: OrderResponse = null;
  private pOrdersArr: Array<Array<OrderUnit>>;
  private pToken: string = null;
  private pCurrentUser: User;

  constructor(private saleService: SaleService, private httpAuthService: HttpAuthService) {
  }

  ngOnInit() {
    this.getToken();
    this.updateUser();

  }
  private getToken() {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      if (data.api_token) {
        this.token = data.api_token;
      }
    }
  }
  private updateUser() {
    this.httpAuthService.user(this.token).subscribe(user => {
      this.currentUser = user;
      // Get orders
      this.saleService.showOrders(user.id).subscribe(resp => {
        this.ordersStr = resp;
        this.strToArr(resp);
      });
    });
  }
  private strToArr(orderStr: OrderResponse) {
    const arr = [];
    let newArr = [];
    orderStr.orders.map(e => {
      arr.push(e.split(';'));
    });
    newArr = arr.map(e => {
      return e.map(elem => new OrderUnit(JSON.parse(elem).brandId,
        JSON.parse(elem).brand,
        JSON.parse(elem).productId,
        JSON.parse(elem).productName,
        JSON.parse(elem).price,
        JSON.parse(elem).qty,
        JSON.parse(elem).amount));
    });
    this.ordersArr = newArr;
  }
}
