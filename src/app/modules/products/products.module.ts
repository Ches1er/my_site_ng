import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products/products.component';
import {RouterModule, Routes} from '@angular/router';
import {BuildingModule} from './product_units/building/building.module';
import {PackModule} from './product_units/pack/pack.module';

const routes: Routes = [
  {path: 'main', component: ProductsComponent},
  {path: 'building', loadChildren: './product_units/building/building.module#BuildingModule'},
  {path: 'pack', loadChildren: './product_units/pack/pack.module#PackModule'},
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    BuildingModule,
    PackModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule {
}
