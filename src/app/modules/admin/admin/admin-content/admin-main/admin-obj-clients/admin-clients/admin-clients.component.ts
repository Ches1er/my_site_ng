import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesArea} from '../../../../../../../dto/sales-area/Sales-area';
import {SalesAreaService} from '../../../../../../../services/http/sales_area/sales-area.service';
import {AdminMessagesService} from '../../../../../../../services/admin/admin-messages.service';
import {AngularEditorCfg} from '../../../../../../../config/angularEditorCfg';
import {Image} from '../../../../../../../dto/images/Image';
import {ClientsService} from '../../../../../../../services/http/clients/clients.service';

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
    salesArea: new FormControl('', Validators.required)
  });
  private pSalesAreas: Array<SalesArea> = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;

  constructor(private salesAreaService: SalesAreaService,
              private adminMsgService: AdminMessagesService,
              private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    this.adminMsgService.clientHasChoosen.subscribe(client => {
      this.addChangeClientForm.patchValue({id: client.id, name: client.name, desc: client.desc, img: client.imgId, salesArea: client.salesAreaId});
      this.choosenImg = new Image(client.imgId, 'name', client.img);
      this.whatHaveToDo = 'update';
    });
    this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
    this.adminMsgService.imageHasChoosen.subscribe(i => {
      this.moveImageToTheFormControl(i);
      this.choosenImg = i;
    });
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

  imagesPickerShow(e) {
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

}
