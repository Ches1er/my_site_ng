import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BuildingComponent} from './building/building_components/building.component';
import {BuildingNavComponent} from './building/building_components/building-nav/building-nav.component';
import {BuildingCampaignComponent} from './building/building_components/building_main/building-campaign/building-campaign.component';
import {BuildingProductionByApplyingComponent} from './building/building_components/building_main/building-production-by-applying/building-production-by-applying.component';
import {BuildingProductionByBrandComponent} from './building/building_components/building_main/building-production-by-brand/building-production-by-brand.component';
import {BuildingObjectsComponent} from './building/building_components/building_main/building-objects/building-objects.component';
import {BuildingSolutionsComponent} from './building/building_components/building_main/building-solutions/building-solutions.component';
import {BuildingTechInfoComponent} from './building/building_components/building_main/building-tech-info/building-tech-info.component';
import {BuildingOrderComponent} from './building/building_components/building_main/building-order/building-order.component';
import { BuildingCampaignUnitComponent } from './building/building_components/building_main/building-campaign/building-campaign-unit/building-campaign-unit.component';
import {SharedModule} from '../../../shared/shared.module';
import {NewsContentComponent} from '../../../shared/news-content/news-content.component';

const routes: Routes = [
  {path: '', redirectTo: 'building', pathMatch: 'full'},
  {
    path: 'building', component: BuildingComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: NewsContentComponent, data: {definer: 'build'}},
      {path: 'campaign', component: BuildingCampaignComponent},
      {path: 'production_by_applying', component: BuildingProductionByApplyingComponent},
      {path: 'production_by_brand', component: BuildingProductionByBrandComponent},
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
    BuildingProductionByApplyingComponent,
    BuildingProductionByBrandComponent,
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
