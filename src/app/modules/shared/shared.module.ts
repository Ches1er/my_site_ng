import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdByMenuUnitComponent} from './prod-by-menu-unit/prod-by-menu-unit.component';

@NgModule({
  declarations: [ProdByMenuUnitComponent],
  imports: [
    CommonModule
  ],
  exports: [ProdByMenuUnitComponent]
})
export class SharedModule { }
