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

  constructor(@Inject(ApplyingGroupsService) private appGroupService: ApplyingGroupsService,
              @Inject(ProductsService) private productService: ProductsService) {
  }

  ngOnInit() {
    this.updateAppGroups();
  }

  private updateAppGroups() {
    this.appGroupService.packAppGroups.subscribe(groups => {
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
