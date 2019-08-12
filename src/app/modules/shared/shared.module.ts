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
import {ApplyingGroupsService} from '../../services/http/applying_groups/applying-groups.service';
import {BrandsService} from '../../services/http/brands/brands.service';
import {ProductsService} from '../../services/http/products/products.service';
import {MessagesService} from '../../services/messages.service';

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
  providers: [
    ApplyingGroupsService,
    BrandsService,
    ProductsService,
    MessagesService
  ],
  exports: [ProdByMenuUnitComponent,
    ProdContentComponent,
    ProdByMenuComponent,
    ClientsObjComponent,
    NewsContentComponent,
    NewsContentUnitComponent,
    CampaignContentComponent,
    CampaignContentUnitComponent,
    ]
})
export class SharedModule {
}
