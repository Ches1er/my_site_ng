import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesArea} from '../../../../../../../dto/sales-area/Sales-area';
import {AdminMessagesService} from '../../../../../../../services/admin/admin-messages.service';
import {SalesAreaService} from '../../../../../../../services/http/sales_area/sales-area.service';
import {AngularEditorCfg} from '../../../../../../../config/angularEditorCfg';
import {MessagesService} from '../../../../../../../services/messages.service';
import {BuildObject} from '../../../../../../../dto/objects/Build_object';
import {BuildingObjectsService} from '../../../../../../../services/http/building_objects/building-objects.service';

@Component({
  selector: 'app-admin-obj',
  templateUrl: './admin-obj.component.html',
  styleUrls: ['./admin-obj.component.less']
})
export class AdminObjComponent implements OnInit {
  addChangeObjForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    img: new FormArray([]),
    imgId: new FormArray([])
  });
  private blockDefiner = false;
  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;
  private pSalesAreas: Array<SalesArea> = [];
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;

  constructor(private salesAreaService: SalesAreaService,
              private adminMsgService: AdminMessagesService,
              private msgService: MessagesService,
              private buildObjService: BuildingObjectsService) {
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.adminMsgService.objectHasChoosen.subscribe(obj => {
      this.whatHaveToDo = 'update';
      (this.addChangeObjForm.controls.img as FormArray).clear();
      (this.addChangeObjForm.controls.imgId as FormArray).clear();
      this.addChangeObjForm.patchValue({id: obj.id, name: obj.name, desc: obj.desc});
      this.pushImagesToTheForm(obj);
    });
    this.adminMsgService.imageHasChoosen.subscribe(i => {
      // blockDefiner controls that image will change only in one (obj) block
      if (this.blockDefiner) {
        (this.addChangeObjForm.controls.imgId as FormArray)
          .push(new FormControl(i.id));
        (this.addChangeObjForm.controls.img as FormArray)
          .push(new FormControl(i.path));
      }
      this.blockDefiner = false;
    });
    this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
  }

  get salesAreas(): Array<SalesArea> {
    return this.pSalesAreas;
  }

  set salesAreas(value: Array<SalesArea>) {
    this.pSalesAreas = value;
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

  DelImg(i, e) {
    (this.addChangeObjForm.controls.imgId as FormArray)
      .removeAt(i);
    (this.addChangeObjForm.controls.img as FormArray)
      .removeAt(i);
    e.preventDefault();
  }

  AddImg(e) {
    // change blockDefiner for working only in objects block, else pictures will change in client block too
    this.blockDefiner = true;
    this.adminMsgService.imagesPickerWindowShow();
    e.preventDefault();
  }

  private pushImagesToTheForm(obj: BuildObject) {
    const imgArr = obj.img.split(',');
    const imgIdArr = obj.imgId.split(',');
    imgArr.forEach(e => {
      (this.addChangeObjForm.controls.img as FormArray)
        .push(new FormControl(e));
    });
    imgIdArr.forEach(e => {
      (this.addChangeObjForm.controls.imgId as FormArray)
        .push(new FormControl(e));
    });
  }

  showFullImage(path: any) {
    this.msgService.imagesViewerShowMessage(path);
  }
  onSubmit() {
    this.buildObjService.add(this.addChangeObjForm.value, this.whatHaveToDo).subscribe(resp => {
      if (resp === 'update success') {
        this.onSubmitResponse = 'Данные успешно обновлены';
      }
      if (resp === 'insert success') {
        this.onSubmitResponse = 'Данные успешно добавлены';
      }
      if (resp === 'error') {
        this.onSubmitResponse = 'Ой, что-то пошло не так! Повторите попытку.';
      }
      if (resp === 'this object exists') {
        this.onSubmitResponse = 'Объект с таким названием уже существует! Если хотите изменить его данные, выберите из списка слева.';
      }
      this.adminMsgService.clientObjHasAddedUpdatedMessage();
    });
  }
  clearFields(e) {
    e.preventDefault();
    this.addChangeObjForm.patchValue({id: '', name: '', desc: ''});
    (this.addChangeObjForm.controls.img as FormArray).clear();
    (this.addChangeObjForm.controls.imgId as FormArray).clear();
    this.whatHaveToDo = 'add';
    this.onSubmitResponse = null;
  }

}
