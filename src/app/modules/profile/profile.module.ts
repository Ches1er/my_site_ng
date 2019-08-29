import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {ProfileMainComponent} from './profile/profile-main/profile-main.component';
import {ProfileOrdersComponent} from './profile/profile-orders/profile-orders.component';
import {ProfileNavComponent} from './profile/profile-nav/profile-nav.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: ProfileComponent, children: [
      {path: '', redirectTo: 'profile_main', pathMatch: 'full'},
      {path: 'profile_main', component: ProfileMainComponent},
      {path: 'profile_orders', component: ProfileOrdersComponent},
    ]
  }
];
@NgModule({
  declarations: [ProfileComponent, ProfileMainComponent, ProfileNavComponent, ProfileOrdersComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule
  ],
  providers: []
})
export class ProfileModule { }
