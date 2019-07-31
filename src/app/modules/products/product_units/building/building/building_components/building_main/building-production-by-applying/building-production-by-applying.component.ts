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

  constructor(@Inject(ApplyingGroupsService) private appGroupService: ApplyingGroupsService,
              @Inject(ProductsService) private productService: ProductsService) {
  }

  ngOnInit() {
    this.updateAppGroups();
  }

  private updateAppGroups() {
    this.appGroupService.buildAppGroups.subscribe(groups => {
      this.appGroups = groups;
      if (groups.length > 0) {
        this.updateCurrentProduct(groups[0].id);
      }
    });
  }

  private updateCurrentProduct(id: number) {
    this.productService.productsByApplying(id)
      .subscribe(products => this.currentProduct = products[0]);
  }
}
