import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BuildingComponent} from './building/building_components/building.component';
import {BuildingNavComponent} from './building/building_components/building-nav/building-nav.component';
import {BuildingCampaignComponent} from './building/building_components/building_main/building-campaign/building-campaign.component';
import {BuildingObjectsComponent} from './building/building_components/building_main/building-objects/building-objects.component';
import {BuildingSolutionsComponent} from './building/building_components/building_main/building-solutions/building-solutions.component';
import {BuildingTechInfoComponent} from './building/building_components/building_main/building-tech-info/building-tech-info.component';
import {BuildingOrderComponent} from './building/building_components/building_main/building-order/building-order.component';
import { BuildingCampaignUnitComponent } from './building/building_components/building_main/building-campaign/building-campaign-unit/building-campaign-unit.component';
import {SharedModule} from '../../../shared/shared.module';
import {NewsContentComponent} from '../../../shared/news-content/news-content.component';
import {CampaignContentComponent} from '../../../shared/campaign-content/campaign-content.component';
import {ProdContentComponent} from '../../../shared/prod-content/prod-content.component';

const routes: Routes = [
  {path: '', redirectTo: 'building', pathMatch: 'full'},
  {
    path: 'building', component: BuildingComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: NewsContentComponent, data: {definer: 'build'}},
      {path: 'campaign', component: CampaignContentComponent, data: {definer: 'build'}},
      {path: 'production_by_applying', component: ProdContentComponent, data: {definer: 'build', prod_by: 'appl'}},
      {path: 'production_by_brand', component: ProdContentComponent, data: {definer: 'build', prod_by: 'brand'}},
      {path: 'building_objects', component: BuildingObjectsComponent},
      {path: 'solutions', component: BuildingSolutionsComponent},
      {path: 'tech_info', component: BuildingTechInfoComponent},
      {path: 'order', component: BuildingOrderComponent},
    ]
  }
];

@NgModule({
  declarations: [BuildingComponent,
    BuildingNavComponent,
    BuildingCampaignComponent,
    BuildingObjectsComponent,
    BuildingSolutionsComponent,
    BuildingTechInfoComponent,
    BuildingOrderComponent,
    BuildingCampaignUnitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class BuildingModule {
}
