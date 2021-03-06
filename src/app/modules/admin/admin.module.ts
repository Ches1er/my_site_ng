import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AdminNavComponent} from './admin/admin-content/admin-nav/admin-nav.component';
import {AdminNewsComponent} from './admin/admin-content/admin-main/admin-news/admin-news.component';
import {AdminCampaignComponent} from './admin/admin-content/admin-main/admin-campaign/admin-campaign.component';
import {HttpNewsService} from '../../services/http/news/http-news.service';
import {SalesAreaService} from '../../services/http/sales_area/sales-area.service';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImagesPickerModule} from '../imagesPicker/images-picker.module';
import {MessagesService} from '../../services/messages.service';
import {AdminMessagesService} from '../../services/admin/admin-messages.service';
import {CampaignService} from '../../services/http/campaign/campaign.service';
import {AdminProductsComponent} from './admin/admin-content/admin-main/admin-products/admin-products.component';
import {BrandsService} from '../../services/http/brands/brands.service';
import {ProductsService} from '../../services/http/products/products.service';
import {ApplyingGroupsService} from '../../services/http/applying_groups/applying-groups.service';
import {AdminApplBrandComponent} from './admin/admin-content/admin-main/admin-products/admin-appl-brand/admin-appl-brand.component';
import {AdminObjClientsComponent} from './admin/admin-content/admin-main/admin-obj-clients/admin-obj-clients.component';
import {ClientsService} from '../../services/http/clients/clients.service';
import {BuildingObjectsService} from '../../services/http/building_objects/building-objects.service';
import {AdminObjComponent} from './admin/admin-content/admin-main/admin-obj-clients/admin-obj/admin-obj.component';
import {AdminClientsComponent} from './admin/admin-content/admin-main/admin-obj-clients/admin-clients/admin-clients.component';
import {ImagesViewerModule} from '../imagesViewer/images-viewer.module';
import { AdminSolutionsComponent } from './admin/admin-content/admin-main/admin-solutions/admin-solutions.component';
import {CookieService} from 'ngx-cookie-service';
import {InputActiveBorderDirective} from '../../directives/input-active-border.directive';
import {InputChangeWidthDirective} from '../../directives/input-change-width.directive';
import { AdminSaleProductComponent } from './admin/admin-content/admin-main/admin-sale-product/admin-sale-product.component';
import {SaleService} from '../../services/http/sale/sale.service';
import {AdminSaleClientsComponent} from './admin/admin-content/admin-main/admin-sale-clients/admin-sale-clients.component';
import { AdminBranchesComponent } from './admin/admin-content/admin-main/admin-branches/admin-branches.component';
import {ContactsService} from '../../services/http/contacts/contacts.service';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: AdminComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: AdminNewsComponent},
      {path: 'campaign', component: AdminCampaignComponent},
      {path: 'products', component: AdminProductsComponent},
      {path: 'building_objects_clients', component: AdminObjClientsComponent},
      {path: 'solutions', component: AdminSolutionsComponent},
      {path: 'sale_products', component: AdminSaleProductComponent},
      {path: 'clients', component: AdminSaleClientsComponent},
      {path: 'branches', component: AdminBranchesComponent}
    ]
  }
];

@NgModule({
  declarations: [AdminComponent,
    InputChangeWidthDirective,
    InputActiveBorderDirective,
    AdminNavComponent,
    AdminNewsComponent,
    AdminCampaignComponent,
    AdminProductsComponent,
    AdminApplBrandComponent,
    AdminObjClientsComponent,
    AdminObjComponent, AdminSaleClientsComponent, AdminSolutionsComponent, AdminSaleProductComponent, AdminBranchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    ImagesPickerModule,
    ImagesViewerModule
  ],
  providers: [HttpNewsService,
    SalesAreaService,
    MessagesService,
    AdminMessagesService,
    CampaignService,
    BrandsService,
    ProductsService,
    ApplyingGroupsService,
    ClientsService,
    CookieService,
    BuildingObjectsService, SaleService, ContactsService]
})
export class AdminModule {
}
