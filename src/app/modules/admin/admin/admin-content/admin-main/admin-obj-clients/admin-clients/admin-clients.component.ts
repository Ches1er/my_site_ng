import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SalesArea} from '../../../../../../../dto/sales-area/Sales-area';
import {SalesAreaService} from '../../../../../../../services/http/sales_area/sales-area.service';
import {AdminMessagesService} from '../../../../../../../services/admin/admin-messages.service';
import {AngularEditorCfg} from '../../../../../../../config/angularEditorCfg';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.less']
})
export class AdminClientsComponent implements OnInit {
  addChangeClientForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    img: new FormControl(''),
    desc: new FormControl(''),
    salesArea: new FormControl('')
  });
  private pSalesAreas: Array<SalesArea> = [];
  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;
  constructor(private salesAreaService: SalesAreaService, private adminMsgService: AdminMessagesService ) { }

  ngOnInit() {
    this.adminMsgService.clientHasChoosen.subscribe(client => {
      this.addChangeClientForm.patchValue({name: client.name, desc: client.desc, img: client.img, salesArea: client.salesAreaId});
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
