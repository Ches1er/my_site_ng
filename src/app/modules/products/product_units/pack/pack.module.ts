import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PackNavComponent} from './pack_components/pack-nav/pack-nav.component';
import {RouterModule, Routes} from '@angular/router';
import {CampaignComponent} from './pack_components/pack_main/campaign/campaign.component';
import {ClientsComponent} from './pack_components/pack_main/clients/clients.component';
import {PackComponent} from './pack_components/pack.component';
import {PackCampaignUnitComponent} from './pack_components/pack_main/campaign/pack-campaign-unit/pack-campaign-unit.component';
import {SharedModule} from '../../../shared/shared.module';
import {NewsContentComponent} from '../../../shared/news-content/news-content.component';
import {CampaignContentComponent} from '../../../shared/campaign-content/campaign-content.component';
import {ProdContentComponent} from '../../../shared/prod-content/prod-content.component';


const routes: Routes = [
  {path: '', redirectTo: 'pack', pathMatch: 'full'},
  {
    path: 'pack', component: PackComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: NewsContentComponent, data: {definer: 'pack'}},
      {path: 'campaign', component: CampaignContentComponent, data: {definer: 'pack'}},
      {path: 'production_by_applying', component: ProdContentComponent, data: {definer: 'pack', prod_by: 'appl'}},
      {path: 'production_by_brand', component: ProdContentComponent, data: {definer: 'pack', prod_by: 'brand'}},
      {path: 'clients', component: ClientsComponent}
    ]
  },
  {path: '', redirectTo: 'main/pack/campaign', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    CampaignComponent,
    ClientsComponent,
    PackNavComponent, PackComponent,
    PackCampaignUnitComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PackModule {
}
