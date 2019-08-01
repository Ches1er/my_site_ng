import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdByMenuUnitComponent} from './prod-by-menu-unit/prod-by-menu-unit.component';
import { ProdContentComponent } from './prod-content/prod-content.component';
import { ProdByMenuComponent } from './prod-by-menu/prod-by-menu.component';
import { ClientsObjComponent } from './clients-obj/clients-obj.component';


@NgModule({
  declarations: [ProdByMenuUnitComponent, ProdContentComponent, ProdByMenuComponent, ClientsObjComponent],
  imports: [
    CommonModule
  ],
  exports: [ProdByMenuUnitComponent, ProdContentComponent, ProdByMenuComponent, ClientsObjComponent]
})
export class SharedModule { }
