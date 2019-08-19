import {Component, Inject, Input, OnInit} from '@angular/core';
import {ClientsService} from '../../../services/http/clients/clients.service';
import {BuildingObjectsService} from '../../../services/http/building_objects/building-objects.service';


@Component({
  selector: 'app-clients-obj',
  templateUrl: './clients-obj.component.html',
  styleUrls: ['./clients-obj.component.less']
})
export class ClientsObjComponent implements OnInit {
  @Input() private pParentComponentDefiner: string = null;
  @Input() private pClientsalesAreaDefiner: string = null;
  private pComponentUnits: Array<any> = [];
  private pHeader: string;

  constructor(@Inject(ClientsService) private clientsService: ClientsService,
              @Inject(BuildingObjectsService) private buildObjService: BuildingObjectsService) {
  }

  get parentComponentDefiner(): string {
    return this.pParentComponentDefiner;
  }

  set parentComponentDefiner(value: string) {
    this.pParentComponentDefiner = value;
  }

  get clientsalesAreaDefiner(): string {
    return this.pClientsalesAreaDefiner;
  }

  set clientsalesAreaDefiner(value: string) {
    this.pClientsalesAreaDefiner = value;
  }

  get componentUnits(): Array<any> {
    return this.pComponentUnits;
  }

  set componentUnits(value: Array<any>) {
    this.pComponentUnits = value;
  }
  get header(): string {
    return this.pHeader;
  }

  set header(value: string) {
    this.pHeader = value;
  }

  ngOnInit() {
    if (this.parentComponentDefiner === 'clients') {
      this.clients();
      this.header = 'Наши клиенты';
    }
    if (this.parentComponentDefiner === 'build_obj') {
      this.buildObj();
      this.header = 'Наши объекты';
    }
  }

  private clients() {
    if (this.clientsalesAreaDefiner === 'pack') {
      this.clientsService.packClients().subscribe(clients => this.componentUnits = clients);
    }
    if (this.clientsalesAreaDefiner === 'building') {
      this.clientsService.buildClients().subscribe(clients => this.componentUnits = clients);
    }
  }

  private buildObj() {
     this.buildObjService.buildObjs().subscribe(objs => this.componentUnits = objs);
  }

}
