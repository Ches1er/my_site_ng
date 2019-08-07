import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProdByMenuUnitComponent} from './prod-by-menu-unit/prod-by-menu-unit.component';
import {ProdContentComponent} from './prod-content/prod-content.component';
import {ProdByMenuComponent} from './prod-by-menu/prod-by-menu.component';
import {ClientsObjComponent} from './clients-obj/clients-obj.component';
import {NewsContentComponent} from './news-content/news-content.component';
import {NewsContentUnitComponent} from './news-content/news-content-unit/news-content-unit.component';
import { CampaignContentComponent } from './campaign-content/campaign-content.component';
import { CampaignContentUnitComponent } from './campaign-content/campaign-content-unit/campaign-content-unit.component';


@NgModule({
  declarations: [ProdByMenuUnitComponent,
    ProdContentComponent,
    ProdByMenuComponent,
    ClientsObjComponent,
    NewsContentComponent,
    NewsContentUnitComponent,
    CampaignContentComponent,
    CampaignContentUnitComponent],
  imports: [
    CommonModule
  ],
  exports: [ProdByMenuUnitComponent,
    ProdContentComponent,
    ProdByMenuComponent,
    ClientsObjComponent,
    NewsContentComponent,
    NewsContentUnitComponent,
    CampaignContentComponent,
    CampaignContentUnitComponent]
})
export class SharedModule {
}
