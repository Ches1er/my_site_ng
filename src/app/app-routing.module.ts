import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './components/main/contacts/contacts.component';
import {AboutUsComponent} from './components/main/about-us/about-us.component';
import {PageNotFoundComponent} from './components/main/page-not-found/page-not-found.component';
import {ProductsModule} from './modules/products/products.module';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: './modules/products/products.module#ProductsModule'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about_us', component: AboutUsComponent},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ProductsModule]
})
export class AppRoutingModule { }
