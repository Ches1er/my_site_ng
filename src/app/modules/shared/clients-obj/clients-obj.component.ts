import {Component, Inject, Input, OnInit} from '@angular/core';
import {ClientsService} from '../../../services/http/clients/clients.service';
import {BuildingObjectsService} from '../../../services/http/building_objects/building-objects.service';
import {Client} from '../../../dto/clients/Client';
import {BuildObject} from '../../../dto/objects/Build_object';
import {MessagesService} from '../../../services/messages.service';


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
              @Inject(BuildingObjectsService) private buildObjService: BuildingObjectsService,
              private msgService: MessagesService) {
  }

  get parentComponentDefiner(): string {
    return this.pParentComponentDefiner;
  }

  get clientsalesAreaDefiner(): string {
    return this.pClientsalesAreaDefiner;
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
      this.clientsService.packClients().subscribe(clients => {
        this.componentUnits = clients;
        this.fillInClients(clients);
      });
    }
    if (this.clientsalesAreaDefiner === 'building') {
      this.clientsService.buildClients().subscribe(clients => {
        this.componentUnits = clients;
      });
    }
  }

  private fillInClients(clients: Array<Client>): void {
    clients.forEach((e, i) => {
      this.componentUnits[i].products = e.products.split(',');
      this.componentUnits[i].productsName = e.productsName.split(',');
    });
  }

  private buildObj() {
    this.buildObjService.buildObjs().subscribe(objs => {
      this.componentUnits = objs;
      this.fillInObj(objs);
    });
  }

  private fillInObj(objects: Array<BuildObject>) {
    objects.forEach((e, i) => {
      this.componentUnits[i].photo = e.img.split(',');
    });
  }

  imageViewerShow(photo) {
    this.msgService.imagesViewerShowMessage(photo);
  }
}
