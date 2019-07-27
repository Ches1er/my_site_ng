import {Component, Inject, OnInit} from '@angular/core';
import {ApplyingGroup} from '../../../../../../../../dto/applying_groups/Applying_group';
import {ApplyingGroupsService} from '../../../../../../../../services/http/applying_groups/applying-groups.service';
import {ProductsService} from '../../../../../../../../services/http/products/products.service';
import {Product} from '../../../../../../../../dto/products/Product';

@Component({
  selector: 'app-building-production-by-applying',
  templateUrl: './building-production-by-applying.component.html',
  styleUrls: ['./building-production-by-applying.component.css']
})
export class BuildingProductionByApplyingComponent implements OnInit {
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
    this.appGroupService.buildAppGroups.subscribe(e => this.appGroups = e);
  }

  // Take 1-st product from 1-st applying group
  private updateCurrentProduct() {
    this.productService.productsByApplying(1)
      .subscribe(products => this.currentProduct = products[0]);
  }
}
