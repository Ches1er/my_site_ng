import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from '../../../dto/products/Product';
import {ProductsService} from '../../../services/http/products/products.service';
import {MessagesService} from '../../../services/messages.service';
import {ActivatedRoute} from '@angular/router';
import {ApplyingGroupsService} from '../../../services/http/applying_groups/applying-groups.service';
import {BrandsService} from '../../../services/http/brands/brands.service';

@Component({
  selector: 'app-prod-content',
  templateUrl: './prod-content.component.html',
  styleUrls: ['./prod-content.component.less']
})
export class ProdContentComponent implements OnInit {

  private pCurrentProduct: Product;
  private pSalesAreaDefiner: string;
  private pProdByDefiner: string;
  private pGroups;
  private pHeader: string;
  @Input() product: Product = null;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(ProductsService) private prodService: ProductsService,
              private route: ActivatedRoute,
              private appGroupService: ApplyingGroupsService,
              private brandsGroupService: BrandsService,
              private productService: ProductsService,
              private brandService: BrandsService) {
  }

  ngOnInit() {
    this.groups = [];
    this.route.data.subscribe(value => this.salesAreaDefiner = value.definer);
    this.route.data.subscribe(value => this.prodByDefiner = value.prod_by);
    this.getProducts(this.prodByDefiner, this.salesAreaDefiner);
    this.setHeader(this.prodByDefiner);
    this.msgService.changedCurrentProduct.subscribe(id => {
      this.prodService.product(id).subscribe(prod => this.currentProduct = prod);
    });
    }

  get prodByDefiner() {
    return this.pProdByDefiner;
  }

  set prodByDefiner(value) {
    this.pProdByDefiner = value;
  }

  get salesAreaDefiner() {
    return this.pSalesAreaDefiner;
  }

  set salesAreaDefiner(value) {
    this.pSalesAreaDefiner = value;
  }

  get groups() {
    return this.pGroups;
  }

  set groups(value) {
    this.pGroups = value;
  }

  get currentProduct(): Product {
    return this.pCurrentProduct;
  }

  set currentProduct(value: Product) {
    this.pCurrentProduct = value;
  }
  get header(): string {
    return this.pHeader;
  }

  set header(value: string) {
    this.pHeader = value;
  }

  private getProducts(prodByDefiner: string, salesAreaDefiner: string) {
    if (salesAreaDefiner === 'build') {
      if (prodByDefiner === 'appl') {
        this.updateBuildAppGroups();
      }
      if (prodByDefiner === 'brand') {
        this.updateBuildBrandGroups();
      }
    }
    if (salesAreaDefiner === 'pack') {
      if (prodByDefiner === 'appl') {
        this.updatePackAppGroups();
      }
      if (prodByDefiner === 'brand') {
        this.updatePackBrandGroups();
      }
    }
  }

  // Appl

  private updateBuildAppGroups() {
    this.appGroupService.buildAppGroups.subscribe(groups => {
      this.groups = groups;
      if (groups.length > 0) {
        this.updateCurrentProductByApp(groups[0].id);
      }
    });
  }

  private updatePackAppGroups() {
    this.appGroupService.packAppGroups.subscribe(groups => {
      this.groups = groups;
      if (groups.length > 0) {
        this.updateCurrentProductByApp(groups[0].id);
      }
    });
  }

  private updateCurrentProductByApp(id: number) {
    this.productService.productsByApplying(id)
      .subscribe(products => this.currentProduct = products[0]);
  }

  // Brand


  private updateBuildBrandGroups() {
    this.brandService.buildBrands.subscribe(brands => {
      this.groups = brands;
      console.log(this.groups);
      if (brands.length > 0) {
        this.updateCurrentProductByBrand(brands[0].id);
      }
    });
  }

  private updatePackBrandGroups() {
    this.brandService.packBrands.subscribe(brands => {
      this.groups = brands;
      if (brands.length > 0) {
        this.updateCurrentProductByBrand(brands[0].id);
      }
    });
  }

  private updateCurrentProductByBrand(id: any) {
    this.productService.productsByBrand(id)
      .subscribe(products => this.currentProduct = products[0]);
  }

  private setHeader(prodByDefiner: string) {
    if (prodByDefiner === 'brand')this.header = 'Продукция по-брендам';
    if (prodByDefiner === 'appl')this.header = 'Продукция по-применению';
  }
}
