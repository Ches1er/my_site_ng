import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SalesArea} from '../../../../../../../dto/sales-area/Sales-area';
import {AdminMessagesService} from '../../../../../../../services/admin/admin-messages.service';
import {SalesAreaService} from '../../../../../../../services/http/sales_area/sales-area.service';
import {AngularEditorCfg} from '../../../../../../../config/angularEditorCfg';

@Component({
  selector: 'app-admin-obj',
  templateUrl: './admin-obj.component.html',
  styleUrls: ['./admin-obj.component.less']
})
export class AdminObjComponent implements OnInit {
  addChangeObjForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    img: new FormControl(''),
    imgId: new FormControl('')
  });
  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;
  private pSalesAreas: Array<SalesArea> = [];
  constructor(private salesAreaService: SalesAreaService, private adminMsgService: AdminMessagesService) { }

  ngOnInit() {
    this.adminMsgService.objectHasChoosen.subscribe(obj => {
     this.addChangeObjForm.patchValue({name: obj.name, desc: obj.desc, img: obj, img_id: obj.imgId});
    });
    this.salesAreaService.getSalesAreas().subscribe(salesArea => this.salesAreas = salesArea);
  }
  get salesAreas(): Array<SalesArea> {
    return this.pSalesAreas;
  }

  set salesAreas(value: Array<SalesArea>) {
    this.pSalesAreas = value;
  }

}
