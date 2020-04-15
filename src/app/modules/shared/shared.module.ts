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
import {ImagesViewerModule} from '../imagesViewer/images-viewer.module';
import { OrderComponent } from './order/order.component';
import {SaleService} from '../../services/http/sale/sale.service';
import {SalesAreaService} from '../../services/http/sales_area/sales-area.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpAuthService} from '../../services/http/http-auth.service';
import {InfoWindowComponent} from '../../components/windows/info-window/info-window.component';

@NgModule({
  declarations: [ProdByMenuUnitComponent,
    ProdContentComponent,
    ProdByMenuComponent,
    ClientsObjComponent,
    NewsContentComponent,
    NewsContentUnitComponent,
    CampaignContentComponent,
    CampaignContentUnitComponent,
    OrderComponent, InfoWindowComponent],
  imports: [
    CommonModule, ImagesViewerModule, ReactiveFormsModule, FormsModule
  ],
  providers: [
    ApplyingGroupsService,
    BrandsService,
    ProductsService,
    SaleService, SalesAreaService, HttpAuthService
  ],
  exports: [ProdByMenuUnitComponent,
    ProdContentComponent,
    ProdByMenuComponent,
    ClientsObjComponent,
    NewsContentComponent,
    NewsContentUnitComponent,
    CampaignContentComponent,
    CampaignContentUnitComponent,
    OrderComponent
    ]
})
export class SharedModule {
}
