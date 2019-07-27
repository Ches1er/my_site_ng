import {Component, Inject, OnInit} from '@angular/core';
import {ApplyingGroupsService} from '../../../../../../../services/http/applying_groups/applying-groups.service';
import {ApplyingGroup} from '../../../../../../../dto/applying_groups/Applying_group';
import {ProductsService} from '../../../../../../../services/http/products/products.service';
import {Product} from '../../../../../../../dto/products/Product';

@Component({
  selector: 'app-production-by-applying',
  templateUrl: './production-by-applying.component.html',
  styleUrls: ['./production-by-applying.component.css']
})
export class ProductionByApplyingComponent implements OnInit {
  appGroups: Array<ApplyingGroup> = [];
  currentProduct: Product = null;
  private pProductId = 3;

  constructor(@Inject(ApplyingGroupsService) private appGroupService: ApplyingGroupsService,
              @Inject(ProductsService) private productService: ProductsService) {
  }

  ngOnInit() {
    this.updateAppGroups();
    this.updateCurrentProduct();
  }

  get productId(): number {
    return this.pProductId;
  }

  set productId(value: number) {
    this.pProductId = value;
  }

  private updateAppGroups() {
    this.appGroupService.packAppGroups.subscribe(e => this.appGroups = e);
  }

  // Take 1-st product from 5-th applying group
  private updateCurrentProduct() {
    this.productService.productsByApplying(5)
      .subscribe(products => this.currentProduct = products[0]);
  }
}
