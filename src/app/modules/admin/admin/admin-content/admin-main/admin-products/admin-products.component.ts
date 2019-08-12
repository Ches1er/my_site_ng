import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../../../../dto/products/Product';
import {SalesArea} from '../../../../../../dto/sales-area/Sales-area';
import {Image} from '../../../../../../dto/images/Image';
import {Brand} from '../../../../../../dto/Brand/Brand';
import {BrandsService} from '../../../../../../services/http/brands/brands.service';
import {SalesAreaService} from '../../../../../../services/http/sales_area/sales-area.service';
import {ProductsService} from '../../../../../../services/http/products/products.service';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {ApplyingGroupsService} from '../../../../../../services/http/applying_groups/applying-groups.service';
import {ApplyingGroup} from '../../../../../../dto/applying_groups/Applying_group';
import {UrlConfig} from '../../../../../../config/url-config';
import {AngularEditorCfg} from '../../../../../../config/angularEditorCfg';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.less']
})
export class AdminProductsComponent implements OnInit {

  addChangeProductForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    brands: new FormControl('', Validators.required),
    salesArea: new FormControl('', Validators.required),
    active: new FormControl('1', Validators.required),
    img: new FormControl('', Validators.required),
    tech_info: new FormControl('', Validators.required),
    applying_group: new FormControl('', Validators.required)
  });

  urlConfig = new UrlConfig();
  angularEditorCfg = new AngularEditorCfg();

  private pProducts: Array<Product>;
  private pSalesAreas: Array<SalesArea> = [];
  private pBrands: Array<Brand> = null;
  private pAppGroup: Array<ApplyingGroup> = null;
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  config = this.angularEditorCfg.CONFIG;

  constructor(private brandService: BrandsService,
              private salesAreaService: SalesAreaService,
              private productsService: ProductsService,
              private adminMessageService: AdminMessagesService,
              private applGroupService: ApplyingGroupsService) {
  }

  ngOnInit() {
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.updateProducts();
    this.salesAreaService.getSalesAreas().subscribe(salesAreas => this.salesAreas = salesAreas);
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      this.moveImageToTheFormControl(i);
      this.choosenImg = i;
    });
    this.adminMessageService.newsCampaignAdded.subscribe(resp => {
        if (resp === 'update success') {
          this.onSubmitResponse = 'Данные успешно обновлены';
        }
        if (resp === 'insert success') {
          this.onSubmitResponse = 'Данные успешно добавлены';
        }
        if (resp === 'error') {
          this.onSubmitResponse = 'Ой, что-то пошло не так! Повторите попытку.';
        }
        this.updateProducts();
      }
    );
    const salesArea = this.addChangeProductForm.get('salesArea');
    salesArea.valueChanges.subscribe(val => this.salesAreaChanges(val));
  }

  salesAreaChanges(val: number): void {
    this.getBrandsDependsOnSalesArea(val);
    this.getApplyingDependsOnSalesArea(val);
  }

  get products(): Array<Product> {
    return this.pProducts;
  }

  set products(value: Array<Product>) {
    this.pProducts = value;
  }

  get salesAreas(): Array<SalesArea> {
    return this.pSalesAreas;
  }

  set salesAreas(value: Array<SalesArea>) {
    this.pSalesAreas = value;
  }

  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }

  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
  }

  get appGroup(): Array<ApplyingGroup> {
    return this.pAppGroup;
  }

  set appGroup(value: Array<ApplyingGroup>) {
    this.pAppGroup = value;
  }


  // Functions

  private getBrandsDependsOnSalesArea(id: number) {
    if (id == 1) {
      this.brandService.packBrands.subscribe(b => this.brands = b);
    }
    if (id == 2) {
      this.brandService.buildBrands.subscribe(b => this.brands = b);
    }
  }

  private getApplyingDependsOnSalesArea(id: number) {
    if (id == 1) {
      this.applGroupService.packAppGroups.subscribe(a => this.appGroup = a);
    }
    if (id == 2) {
      this.applGroupService.buildAppGroups.subscribe(a => this.appGroup = a);
    }
  }


  fillInProduct(product: Product) {
    this.addChangeProductForm.patchValue({
        name: product.name,
        brands: product.brandId,
        salesArea: product.salesAreaId,
        img: product.imgId,
        active: product.active,
        tech_info: product.techInfo,
        applying_group: product.applyingGroupId
      }
    );
    this.getBrandsDependsOnSalesArea(product.salesAreaId);
    this.getApplyingDependsOnSalesArea(product.salesAreaId);
    this.choosenImg = new Image(product.imgId, 'name', product.img);
    this.whatHaveToDo = 'update';
  }


  onSubmit() {
    this.productsService.addUpdateProduct(this.addChangeProductForm.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.newsCampaignAddedMessage(resp);
    });
  }

  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  private updateProducts() {
    this.productsService.allProducts().subscribe(p => {
      this.products = p;
    });
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeProductForm.patchValue({
      img: image.id
    });
  }
}
