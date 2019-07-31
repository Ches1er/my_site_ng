import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from '../../../dto/products/Product';
import {ProductsService} from '../../../services/http/products/products.service';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-prod-by-menu-unit',
  templateUrl: './prod-by-menu-unit.component.html',
  styleUrls: ['./prod-by-menu-unit.component.css']
})
export class ProdByMenuUnitComponent implements OnInit {

  @Input() pAppGroupId: number;
  @Input() pGroupDefiner: string;
  private pProducts: Array<Product> = [];
  private pVisible = false;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(ProductsService) private productsService: ProductsService) {
  }

  ngOnInit() {
    this.msgService.productsMenuUnitsShowMessage.subscribe(id => {
      if (this.appGroupId === id) {
        this.visible = true;
        if (this.groupDefiner === 'applying') {
          this.productsService.productsByApplying(this.appGroupId).subscribe(prod => this.products = prod);
        }
        if (this.groupDefiner === 'brand') {
          this.productsService.productsByBrand(this.appGroupId).subscribe(prod => this.products = prod);
        }
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

  get groupDefiner(): string {
    return this.pGroupDefiner;
  }

  get visible(): any {
    return this.pVisible;
  }

  set visible(value: any) {
    this.pVisible = value;
  }


  changeCurrentProduct(id: number) {
    this.msgService.setChangedCurrentProductId(id);
  }
}
