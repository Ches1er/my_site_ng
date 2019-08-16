import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesArea} from '../../../../../../../dto/sales-area/Sales-area';
import {AdminMessagesService} from '../../../../../../../services/admin/admin-messages.service';
import {SalesAreaService} from '../../../../../../../services/http/sales_area/sales-area.service';
import {AngularEditorCfg} from '../../../../../../../config/angularEditorCfg';
import {MessagesService} from '../../../../../../../services/messages.service';
import {BuildObject} from '../../../../../../../dto/objects/Build_object';

@Component({
  selector: 'app-admin-obj',
  templateUrl: './admin-obj.component.html',
  styleUrls: ['./admin-obj.component.less']
})
export class AdminObjComponent implements OnInit {
  addChangeObjForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    img: new FormArray([]),
    imgId: new FormArray([])
  });
  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;
  private pSalesAreas: Array<SalesArea> = [];

  constructor(private salesAreaService: SalesAreaService,
              private adminMsgService: AdminMessagesService,
              private msgService: MessagesService) {
  }

  ngOnInit() {

    this.adminMsgService.objectHasChoosen.subscribe(obj => {
      this.addChangeObjForm.get('img').reset();
      this.addChangeObjForm.get('imgId').reset();
      this.addChangeObjForm.patchValue({name: obj.name, desc: obj.desc});
      this.pushImagesToTheForm(obj);
    });
    this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
  }

  get salesAreas(): Array<SalesArea> {
    return this.pSalesAreas;
  }

  set salesAreas(value: Array<SalesArea>) {
    this.pSalesAreas = value;
  }

  DelImg(i, $event) {
    // todo
  }

  AddImg($event) {
    // todo
  }

  private pushImagesToTheForm(obj: BuildObject) {
    console.log(obj);
    /*obj.img.forEach(e => {
      (this.addChangeObjForm.controls.img as FormArray)
        .push(new FormControl(e));
    });
    obj.imgId.forEach(e => {
      (this.addChangeObjForm.controls.imgId as FormArray)
        .push(new FormControl(e));
    });*/
  }

  showFullImage(path: any) {
    this.msgService.imagesViewerShowMessage(path);
  }
  imagesPickerShow(event) {
    this.adminMsgService.imagesPickerWindowShow();
    event.preventDefault();
  }
}
