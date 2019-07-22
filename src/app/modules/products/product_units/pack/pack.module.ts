import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PackNavComponent} from './pack_components/pack-nav/pack-nav.component';
import {RouterModule, Routes} from '@angular/router';
import {CampaignComponent} from './pack_components/pack_main/campaign/campaign.component';
import {NewsComponent} from './pack_components/pack_main/news/news.component';
import {ProductionByBrandComponent} from './pack_components/pack_main/production-by-brand/production-by-brand.component';
import {ProductionByApplyingComponent} from './pack_components/pack_main/production-by-applying/production-by-applying.component';
import {ClientsComponent} from './pack_components/pack_main/clients/clients.component';
import {PackComponent} from './pack_components/pack.component';
import { PackNewsUnitComponent } from './pack_components/pack_main/news/pack-news-unit/pack-news-unit.component';

const routes: Routes = [
  {path: '', redirectTo: 'pack', pathMatch: 'full'},
  {path: 'pack', component: PackComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: NewsComponent},
      {path: 'campaign', component: CampaignComponent},
      {path: 'production_by_applying', component: ProductionByApplyingComponent},
      {path: 'production_by_brand', component: ProductionByBrandComponent},
      {path: 'clients', component: ClientsComponent}
    ]},
  {path: '', redirectTo: 'main/pack/campaign', pathMatch: 'full'},
];

@NgModule({
  declarations: [NewsComponent, CampaignComponent, ProductionByApplyingComponent,
    ProductionByBrandComponent, ClientsComponent, PackNavComponent, PackComponent, PackNewsUnitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PackModule {
}
