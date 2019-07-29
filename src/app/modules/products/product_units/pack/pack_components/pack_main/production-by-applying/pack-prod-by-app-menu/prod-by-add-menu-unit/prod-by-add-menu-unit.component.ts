import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../../dto/products/Product';
import {ProductsService} from '../../../../../../../../../services/http/products/products.service';
import {MessagesService} from '../../../../../../../../../services/messages.service';

@Component({
  selector: 'app-prod-by-add-menu-unit',
  templateUrl: './prod-by-add-menu-unit.component.html',
  styleUrls: ['./prod-by-add-menu-unit.component.css']
})
export class ProdByAddMenuUnitComponent implements OnInit {
  @Input() pAppGroupId = null;
  private pProducts: Array<Product> = [];
  private pVisible = false;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(ProductsService) private productsService: ProductsService) {
  }

  ngOnInit() {
    this.msgService.productsMenuUnitsShowMessage.subscribe(id => {
      if (this.appGroupId === id) {
        this.visible = true;
        this.productsService.productsByApplying(this.appGroupId).subscribe(prod => this.products = prod);
      } else {
        this.visible = false;
      }
    });
  }

  get products(): Array<Product> {
    return this.pProducts;
  }

  set products(value: Array<Product>) {
    this.pProducts = value;
  }

  get appGroupId(): any {
    return this.pAppGroupId;
  }
  get visible(): any {
    return this.pVisible;
  }

  set visible(value: any) {
    this.pVisible = value;
  }

}
