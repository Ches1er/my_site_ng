import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../../../dto/products/Product';
import {MessagesService} from '../../../../../../../../../../services/messages.service';

@Component({
  selector: 'app-building-solution-product',
  templateUrl: './building-solution-product.component.html',
  styleUrls: ['./building-solution-product.component.less']
})
export class BuildingSolutionProductComponent implements OnInit {

  private pCurrentProduct: Product = null;

  constructor(private msgService: MessagesService) {
  }

  ngOnInit() {
    this.msgService.changeSolutionProduct.subscribe(product => {
      this.currentProduct = product;
    });
  }

  get currentProduct(): Product {
    return this.pCurrentProduct;
  }

  set currentProduct(value: Product) {
    this.pCurrentProduct = value;
  }

}
