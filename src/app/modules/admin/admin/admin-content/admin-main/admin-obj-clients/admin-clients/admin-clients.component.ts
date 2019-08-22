import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesArea} from '../../../../../../../dto/sales-area/Sales-area';
import {SalesAreaService} from '../../../../../../../services/http/sales_area/sales-area.service';
import {AdminMessagesService} from '../../../../../../../services/admin/admin-messages.service';
import {AngularEditorCfg} from '../../../../../../../config/angularEditorCfg';
import {Image} from '../../../../../../../dto/images/Image';
import {ClientsService} from '../../../../../../../services/http/clients/clients.service';
import {Client} from '../../../../../../../dto/clients/Client';
import {ProductsService} from '../../../../../../../services/http/products/products.service';
import {Product} from '../../../../../../../dto/products/Product';
import {HttpUrlEncodingCodec} from '@angular/common/http';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.less']
})
export class AdminClientsComponent implements OnInit {

  addChangeClientForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    img: new FormControl(''),
    desc: new FormControl('', Validators.required),
    salesArea: new FormControl('', Validators.required),
    products: new FormArray([])
  });
  private pProducts: Array<Product> = []
  private pSalesAreas: Array<SalesArea> = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  private blockDefiner = false;
  urlEncode = new HttpUrlEncodingCodec();
  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;

  constructor(private salesAreaService: SalesAreaService,
              private adminMsgService: AdminMessagesService,
              private clientsService: ClientsService,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    this.productsService.allProducts().subscribe(p => this.products = p);
    this.adminMsgService.clientHasChoosen.subscribe(client => {
      this.fillInfForm(client);
    });
    this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
    this.adminMsgService.imageHasChoosen.subscribe(i => {
      // blockDefiner controls that image will change only in one (client) block
      if (this.blockDefiner) {
        this.moveImageToTheFormControl(i);
        this.choosenImg = i;
      }
      this.blockDefiner = false;
    });
  }

  get salesAreas(): Array<SalesArea> {
    return this.pSalesAreas;
  }

  set salesAreas(value: Array<SalesArea>) {
    this.pSalesAreas = value;
  }

  get products(): Array<Product> {
    return this.pProducts;
  }

  set products(value: Array<Product>) {
    this.pProducts = value;
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

  imagesPickerShow(e) {
    // change blockDefiner for working only in clients block, else pictures will change in obj block too
    this.blockDefiner = true;
    this.adminMsgService.imagesPickerWindowShow();
    e.preventDefault();
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeClientForm.patchValue({
      img: image.id
    });
  }

  clearFields(e) {
    this.addChangeClientForm.patchValue({id: '', name: '', desc: '', img: '', salesArea: ''});
    this.addChangeClientForm.controls.products.clear();
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    this.onSubmitResponse = null;
    e.preventDefault();
  }

  onSubmit() {
    this.clientsService.add(this.addChangeClientForm.value, this.whatHaveToDo).subscribe(resp => {
      if (resp === 'update success') {
        this.onSubmitResponse = 'Данные успешно обновлены';
      }
      if (resp === 'insert success') {
        this.onSubmitResponse = 'Данные успешно добавлены';
      }
      if (resp === 'error') {
        this.onSubmitResponse = 'Ой, что-то пошло не так! Повторите попытку.';
      }
      if (resp === 'this client exists') {
        this.onSubmitResponse = 'Клиент с таким названием уже существует! Если хотите изменить его данные, выберите из списка слева.';
      }
      this.adminMsgService.clientObjHasAddedUpdatedMessage();
    });
  }

  private fillInfForm(client: Client) {
    this.addChangeClientForm.patchValue({
      id: client.id,
      name: client.name,
      desc: this.urlEncode.decodeValue(client.desc),
      img: client.imgId,
      salesArea: client.salesAreaId
    });
    this.choosenImg = new Image(client.imgId, 'name', client.img);
    this.whatHaveToDo = 'update';
    const products = client.products.split(',');
    const formProducts = this.addChangeClientForm.controls.products as FormArray;
    formProducts.clear();
    products.map(e => {
      formProducts.push(new FormControl(e, Validators.required));
    });
    this.onSubmitResponse = null;
  }

  AddProduct(e) {
    (this.addChangeClientForm.controls.products as FormArray)
      .push(new FormControl('', Validators.required));
    e.preventDefault();
  }

  DelProduct(i: any, e) {
    (this.addChangeClientForm.controls.products as FormArray)
      .removeAt(i);
    e.preventDefault();
  }
}
