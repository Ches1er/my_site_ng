import {Component, OnInit} from '@angular/core';
import {BrandsService} from '../../../../../../../services/http/brands/brands.service';
import {ApplyingGroupsService} from '../../../../../../../services/http/applying_groups/applying-groups.service';
import {Brand} from '../../../../../../../dto/Brand/Brand';
import {ApplyingGroup} from '../../../../../../../dto/applying_groups/Applying_group';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesAreaService} from '../../../../../../../services/http/sales_area/sales-area.service';
import {SalesArea} from '../../../../../../../dto/sales-area/Sales-area';
import {AdminMessagesService} from '../../../../../../../services/admin/admin-messages.service';

@Component({
  selector: 'app-admin-appl-brand',
  templateUrl: './admin-appl-brand.component.html',
  styleUrls: ['./admin-appl-brand.component.less']
})
export class AdminApplBrandComponent implements OnInit {

  addChangeBrand: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl(''),
    salesArea: new FormControl(''),
    brands: new FormControl(''),
    active: new FormControl('true'),
  });
  addChangeApplGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl(''),
    salesArea: new FormControl(''),
    groups: new FormControl('')
  });
  private pSalesAreas: Array<SalesArea> = [];
  private pBrands: Array<Brand>;
  private pApplGroups: Array<ApplyingGroup>;
  private pWhatHaveToDo = 'add';
  private pOnSubmitResponse: string;

  constructor(private brandsService: BrandsService,
              private applGroupSerive: ApplyingGroupsService,
              private salesAreaService: SalesAreaService,
              private adminMessageService: AdminMessagesService) {
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.adminMessageService.brandAdded.subscribe(resp => {
      this.brandsService.allBrands.subscribe(b => this.brands = b);
    });
    this.adminMessageService.applGroupAdded.subscribe(resp => {
      this.applGroupSerive.allAppGroups.subscribe(g => this.applGroups = g);
    });
    this.salesAreaService.getSalesAreas().subscribe(salesAreas => this.salesAreas = salesAreas);
    this.brandsService.allBrands.subscribe(b => this.brands = b);
    this.applGroupSerive.allAppGroups.subscribe(g => this.applGroups = g);
    const brand = this.addChangeBrand.get('brands');
    brand.valueChanges.subscribe(val => this.fillNameField(val, 'addChangeBrand'));
    const applGroup = this.addChangeApplGroup.get('groups');
    applGroup.valueChanges.subscribe(val => this.fillNameField(val, 'addChangeApplGroup'));
  }

  get salesAreas(): Array<SalesArea> {
    return this.pSalesAreas;
  }

  set salesAreas(value: Array<SalesArea>) {
    this.pSalesAreas = value;
  }

  get applGroups(): Array<ApplyingGroup> {
    return this.pApplGroups;
  }

  set applGroups(value: Array<ApplyingGroup>) {
    this.pApplGroups = value;
  }

  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
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

  private fillNameField(val: any, formGroup: string) {
    this.whatHaveToDo = 'update';
    if (formGroup === 'addChangeBrand') {
      this.brands.forEach(e => {
        if (e.id == val) {
          this.addChangeBrand.patchValue({name: e.name, id: e.id, salesArea: e.salesAreaId, active: e.active});
        }
      });
    }
    if (formGroup === 'addChangeApplGroup') {
      this.whatHaveToDo = 'update';
      this.applGroups.forEach(e => {
        if (e.id == val) {
          this.addChangeApplGroup.patchValue({name: e.name, id: e.id, salesArea: e.salesAreaId});
        }
      });
    }
  }

  getResponse(resp: string) {
    if (resp === 'update success') {
      this.onSubmitResponse = 'Данные успешно обновлены';
    }
    if (resp === 'insert success') {
      this.onSubmitResponse = 'Данные успешно добавлены';
    }
    if (resp === 'error') {
      this.onSubmitResponse = 'Ой, что-то пошло не так! Повторите попытку.';
    }
    if (resp === 'this brand exists') {
      this.onSubmitResponse = 'Такой бренд уже существует, если хотите изменить, его следует выбрать в списке.';
    }
    if (resp === 'this appl group exists') {
      this.onSubmitResponse = 'Такая группа уже существует, если хотите изменить, ее следует выбрать в списке.';
    }
  }

  brandFormOnSubmit() {
    this.brandsService.add(this.addChangeBrand.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.brandAddedMessage();
      this.getResponse(resp);

    });
  }

  addChangeApplGroupOnSubmit() {
    this.applGroupSerive.add(this.addChangeApplGroup.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.applGroupAddedMessage();
      this.getResponse(resp);
    });
  }

  clearBrandFields(event) {
    event.preventDefault();
    this.whatHaveToDo = 'add';
    this.addChangeBrand.patchValue({name: '', salesArea: ''});
  }
  clearApplGroupields(event) {
    event.preventDefault();
    this.whatHaveToDo = 'add';
    this.addChangeApplGroup.patchValue({name: '', salesArea: ''});
  }
}
