import {Component, OnInit} from '@angular/core';
import {SaleService} from '../../../../../../services/http/sale/sale.service';
import {User} from '../../../../../../dto/User/User';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpAuthService} from '../../../../../../services/http/http-auth.service';
import {BrandsService} from '../../../../../../services/http/brands/brands.service';
import {Brand} from '../../../../../../dto/Brand/Brand';
import {ClientDiscount} from '../../../../../../dto/clientDiscounts/ClientDiscount';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.less']
})
export class AdminSaleClientsComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phones: new FormArray([]),
    confirmedClient: new FormControl(''),
    emailVerifiedAt: new FormControl(''),
    apiToken: new FormControl('')
  });
  discountForm: FormGroup = new FormGroup({
    id: new FormArray([]),
    brandId: new FormArray([]),
    brand: new FormArray([]),
    discount: new FormArray([])
  });
  addDiscountForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    brand: new FormControl(''),
    discount: new FormControl('', [
      Validators.required,
      Validators.pattern('(?<![-.])\\b[0-9]+\\b(?!\\.[0-9])')
    ]),
  });
  private pClients: Array<User> = [];
  private pCurrentUser: User = null;
  private pOnSubmitResponse: string;
  private pBrands: Array<Brand> = [];
  private pOnUpdateSubmitResponse: string;

  constructor(private saleService: SaleService,
              private httpAuthService: HttpAuthService,
              private brandService: BrandsService,
              private adminMsgService: AdminMessagesService) {
  }

  ngOnInit() {
    this.saleService.getClients().subscribe(clients => this.clients = clients);
    this.adminMsgService.discountsUpdated.subscribe(r => this.fillInClient(this.currentUser));
  }

  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
  }

  get clients(): Array<User> {
    return this.pClients;
  }

  set clients(value: Array<User>) {
    this.pClients = value;
  }

  get currentUser(): User {
    return this.pCurrentUser;
  }

  set currentUser(value: User) {
    this.pCurrentUser = value;
  }

  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }

  get onUpdateSubmitResponse(): string {
    return this.pOnUpdateSubmitResponse;
  }

  set onUpdateSubmitResponse(value: string) {
    this.pOnUpdateSubmitResponse = value;
  }

  private addToProfileForm(client: User) {
    this.profileForm.patchValue({
      name: client.name,
      id: client.id,
      email: client.email,
      confirmedClient: client.confirmedClient,
      emailVerifiedAt: client.emailVerifiedAt
    });
    const phones = client.phones.split(',');
    const formPhones = this.profileForm.controls.phones as FormArray;
    phones.map(e => {
      formPhones.push(new FormControl(e));
    });
  }

  public onUpdateDiscountSubmit() {
    this.saleService.updateDiscount(this.discountForm.value, this.currentUser.id).subscribe(r => {
      this.adminMsgService.discountsHasUpdatedMessage();
      if (r === 'success') {
        this.onUpdateSubmitResponse = 'Скидки обновлены';
      }
    });
  }

  public fillInClient(client: User) {
    this.onSubmitResponse = null;
    this.onUpdateSubmitResponse = null;
    (this.profileForm.controls.phones as FormArray).clear();
    (this.discountForm.controls.id as FormArray).clear();
    (this.discountForm.controls.brandId as FormArray).clear();
    (this.discountForm.controls.brand as FormArray).clear();
    (this.discountForm.controls.discount as FormArray).clear();
    this.brands = [];
    this.addDiscountForm.patchValue({id: '', brand: '', discount: ''});
    this.currentUser = client;
    this.addToProfileForm(client);
    this.addToDiscountForm(client);
  }

  sendVerificationEmail(event) {
    event.preventDefault();
    this.httpAuthService.rememberVerification(this.currentUser.apiToken).subscribe(resp => {
      if (resp === 'Letter has sent') {
        this.onSubmitResponse = 'Повторное письмо отправлено';
      }
      // if (resp === 'error') this.onSubmitResponse = 'Ой! Что-то пошло не так, повторите процедуру позже.';
    });
  }

  private addToDiscountForm(client: User) {
    const discountFormId = this.discountForm.controls.id as FormArray;
    const discountFormBrandId = this.discountForm.controls.brandId as FormArray;
    const discountFormBrand = this.discountForm.controls.brand as FormArray;
    const discountFormDiscount = this.discountForm.controls.discount as FormArray;
    this.saleService.getClientDiscount(client.id).subscribe(discounts => {
      this.fillInBrands(discounts);
      discounts.map(d => {
        discountFormId.push(new FormControl(d.id));
        discountFormBrandId.push(new FormControl(d.brandId));
        discountFormBrand.push(new FormControl(d.brand));
        discountFormDiscount.push(new FormControl(d.discount, [
          Validators.required,
          Validators.pattern('(?<![-.])\\b[0-9]+\\b(?!\\.[0-9])')
        ]));
      });
    });
  }

  private fillInBrands(discounts: Array<ClientDiscount>) {
    if (discounts.length === 0) {
      this.brandService.buildBrands.subscribe(b => this.brands = b);
    } else {
      const brandIds = [];
      discounts.map(d => {
        brandIds.push(d.brandId);
      });
      this.brandService.buildBrands.subscribe(b => {
        const newB = b.filter(e => {
          return !brandIds.includes(e.id);
        });
        this.brands = newB;
      });
    }
  }

  public addNewDiscount() {
    const discountFormBrandId = this.discountForm.controls.brandId as FormArray;
    const discountFormBrand = this.discountForm.controls.brand as FormArray;
    const discountFormDiscount = this.discountForm.controls.discount as FormArray;
    const brandById = this.brands.filter(e => e.id == this.addDiscountForm.get('brand').value);
    discountFormBrandId.push(new FormControl(this.addDiscountForm.get('brand').value));
    discountFormBrand.push(new FormControl(brandById[0].name));
    discountFormDiscount.push(new FormControl(this.addDiscountForm.get('discount').value));
  }
}
