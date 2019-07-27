import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BuildingComponent} from './building/building_components/building.component';
import {BuildingNavComponent} from './building/building_components/building-nav/building-nav.component';
import {BuildingNewsComponent} from './building/building_components/building_main/building-news/building-news.component';
import {BuildingCampaignComponent} from './building/building_components/building_main/building-campaign/building-campaign.component';
import {BuildingProductionByApplyingComponent} from './building/building_components/building_main/building-production-by-applying/building-production-by-applying.component';
import {BuildingProductionByBrandComponent} from './building/building_components/building_main/building-production-by-brand/building-production-by-brand.component';
import {BuildingObjectsComponent} from './building/building_components/building_main/building-objects/building-objects.component';
import {BuildingSolutionsComponent} from './building/building_components/building_main/building-solutions/building-solutions.component';
import {BuildingTechInfoComponent} from './building/building_components/building_main/building-tech-info/building-tech-info.component';
import {BuildingOrderComponent} from './building/building_components/building_main/building-order/building-order.component';
import {BuildingNewsUnitComponent } from './building/building_components/building_main/building-news/building-news-unit/building-news-unit.component';
import { BuildingCampaignUnitComponent } from './building/building_components/building_main/building-campaign/building-campaign-unit/building-campaign-unit.component';
import { ProductionByApplyingMenuComponent } from './building/building_components/building_main/building-production-by-applying/production-by-applying-menu/production-by-applying-menu.component';
import { ProductionByApplyingContentComponent } from './building/building_components/building_main/building-production-by-applying/production-by-applying-content/production-by-applying-content.component';
import { BuildProdByBrandsMenuComponent } from './building/building_components/building_main/building-production-by-brand/build-prod-by-brands-menu/build-prod-by-brands-menu.component';
import { BuildProdByBrandContentComponent } from './building/building_components/building_main/building-production-by-brand/build-prod-by-brand-content/build-prod-by-brand-content.component';
import { ProdByAppMenuUnitComponent } from './building/building_components/building_main/building-production-by-applying/production-by-applying-menu/prod-by-app-menu-unit/prod-by-app-menu-unit.component';


const routes: Routes = [
  {path: '', redirectTo: 'building', pathMatch: 'full'},
  {
    path: 'building', component: BuildingComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: BuildingNewsComponent},
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
    BuildingNewsComponent,
    BuildingCampaignComponent,
    BuildingProductionByApplyingComponent,
    BuildingProductionByBrandComponent,
    BuildingObjectsComponent,
    BuildingSolutionsComponent,
    BuildingTechInfoComponent,
    BuildingOrderComponent,
    BuildingNewsUnitComponent,
    BuildingCampaignUnitComponent,
    ProductionByApplyingMenuComponent,
    ProductionByApplyingContentComponent,
    BuildProdByBrandsMenuComponent,
    BuildProdByBrandContentComponent,
    ProdByAppMenuUnitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuildingModule {
}
