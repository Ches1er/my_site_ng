import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../../../../../../services/http/clients/clients.service';
import {BuildingObjectsService} from '../../../../../../services/http/building_objects/building-objects.service';
import {Client} from '../../../../../../dto/clients/Client';
import {BuildObject} from '../../../../../../dto/objects/Build_object';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SalesAreaService} from '../../../../../../services/http/sales_area/sales-area.service';
import {SalesArea} from '../../../../../../dto/sales-area/Sales-area';

@Component({
  selector: 'app-admin-obj-clients',
  templateUrl: './admin-obj-clients.component.html',
  styleUrls: ['./admin-obj-clients.component.less']
})
export class AdminObjClientsComponent implements OnInit {

  private pClients: Array<Client>;
  private pObjects: Array<BuildObject>;

  constructor(private clientsService: ClientsService,
              private objService: BuildingObjectsService,
              private adminMsgService: AdminMessagesService
  ) {
  }

  ngOnInit() {
    this.updateClientsObjList();
    this.adminMsgService.clientObjHasAddedUpdated.subscribe(resp => {
      this.updateClientsObjList();
    });
  }

  private updateClientsObjList() {
    this.clientsService.allClients().subscribe(clients => this.clients = clients);
    this.objService.buildObjs().subscribe(obj => this.objects = obj);
  }

  get clients(): Array<Client> {
    return this.pClients;
  }

  set clients(value: Array<Client>) {
    this.pClients = value;
  }

  get objects(): Array<BuildObject> {
    return this.pObjects;
  }

  set objects(value: Array<BuildObject>) {
    this.pObjects = value;
  }

  fillInClient(client) {
    this.adminMsgService.clientHasChoosenMessege(client);
  }

  fillInObject(object) {
    this.adminMsgService.objectHasChoosenMessage(object);
  }

}
