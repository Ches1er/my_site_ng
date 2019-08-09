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
import {ReactiveFormsModule} from '@angular/forms';
import {ImagesPickerModule} from '../imagesPicker/images-picker.module';
import {MessagesService} from '../../services/messages.service';
import {AdminMessagesService} from '../../services/admin/admin-messages.service';
import {CampaignService} from '../../services/http/campaign/campaign.service';
import {AdminProductsComponent} from './admin/admin-content/admin-main/admin-products/admin-products.component';
import {BrandsService} from '../../services/http/brands/brands.service';
import {ProductsService} from '../../services/http/products/products.service';
import {ApplyingGroupsService} from '../../services/http/applying_groups/applying-groups.service';

const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: AdminNewsComponent},
      {path: 'campaign', component: AdminCampaignComponent},
      {path: 'products', component: AdminProductsComponent}
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, AdminNavComponent, AdminNewsComponent, AdminCampaignComponent, AdminProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AngularEditorModule,
    ImagesPickerModule
  ],
  providers: [HttpNewsService,
    SalesAreaService,
    MessagesService,
    AdminMessagesService,
    CampaignService,
    BrandsService,
    ProductsService,
    ApplyingGroupsService]
})
export class AdminModule {
}
