import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BuildingComponent} from './building/building_components/building.component';


const routes: Routes = [
  {path: 'building', component: BuildingComponent}
];

@NgModule({
  declarations: [BuildingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuildingModule { }
