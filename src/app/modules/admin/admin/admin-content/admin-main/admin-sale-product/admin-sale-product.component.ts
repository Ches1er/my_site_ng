import { Component, OnInit } from '@angular/core';
import {BrandsService} from '../../../../../../services/http/brands/brands.service';
import {ApplyingGroupsService} from '../../../../../../services/http/applying_groups/applying-groups.service';
import {Image} from '../../../../../../dto/images/Image';
import {Brand} from '../../../../../../dto/Brand/Brand';
import {SalesAreaService} from '../../../../../../services/http/sales_area/sales-area.service';
import {Product} from '../../../../../../dto/products/Product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlConfig} from '../../../../../../config/url-config';
import {ApplyingGroup} from '../../../../../../dto/applying_groups/Applying_group';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {ProductsService} from '../../../../../../services/http/products/products.service';
import {SalesArea} from '../../../../../../dto/sales-area/Sales-area';
import {AngularEditorCfg} from '../../../../../../config/angularEditorCfg';
import {SaleService} from '../../../../../../services/http/sale/sale.service';
import {SaleProduct} from '../../../../../../dto/sale_products/SaleProduct';

@Component({
  selector: 'app-admin-sale-product',
  templateUrl: './admin-sale-product.component.html',
  styleUrls: ['./admin-sale-product.component.less']
})
export class AdminSaleProductComponent implements OnInit {

  addChangeProductForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    brands: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    measure: new FormControl('')
  });

  urlConfig = new UrlConfig();

  private pProducts: Array<SaleProduct>;
  private pBrands: Array<Brand> = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;

  constructor(private brandService: BrandsService,
              private productsService: ProductsService,
              private adminMessageService: AdminMessagesService,
              private saleService: SaleService) {
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.brandService.allBrands.subscribe(b => this.brands = b);
    this.updateProducts();
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
        if (resp === 'this product exists') {
          this.onSubmitResponse = 'Продукт с таким названием уже существует, выберите его из списка слева, чтоб изменить данные';
        }
        this.updateProducts();
      }
    );
  }

  get products(): Array<SaleProduct> {
    return this.pProducts;
  }

  set products(value: Array<SaleProduct>) {
    this.pProducts = value;
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

  // Functions


  fillInProduct(product: SaleProduct) {
    this.addChangeProductForm.patchValue({
        id: product.id,
        name: product.name,
        brands: product.brandId,
        price: product.price,
        measure: product.measure,
      }
    );
    this.whatHaveToDo = 'update';
  }

  onSubmit() {
    this.saleService.addSaleProduct(this.addChangeProductForm.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.newsCampaignAddedMessage(resp);
      this.clearFields();
    });
  }

  private updateProducts() {
    this.saleService.saleProductsForAdmin.subscribe(p => {
      this.products = p;
    });
  }

  clearFieldsByBtn(e) {
    e.preventDefault();
    this.clearFields();
  }

  clearFields() {
    this.addChangeProductForm.patchValue({
      id: '',
      name: '',
      brands: '',
      price: '',
      measure: '',
    });
    this.whatHaveToDo = 'add';
  }

}
