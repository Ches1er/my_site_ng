import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContactsComponent} from './components/main/contacts/contacts.component';
import {AboutUsComponent} from './components/main/about-us/about-us.component';
import {HeaderNavComponent} from './components/header/header-nav/header-nav.component';
import {HeaderAuthBlockComponent} from './components/header/header-auth-block/header-auth-block.component';
import {PageNotFoundComponent} from './components/main/page-not-found/page-not-found.component';

import {ProductsModule} from './modules/products/products.module';
import {AdminModule} from './modules/admin/admin.module';

import {Routes, RouterModule} from '@angular/router';
import {CurrentUserBlockComponent} from './components/header/header-auth-block/current-user-block/current-user-block.component';
import {AuthButtonsBlockComponent} from './components/header/header-auth-block/auth-buttons-block/auth-buttons-block.component';
import {LoginComponent} from './components/windows/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './components/windows/register/register.component';
import {HttpErrorInterceptor} from './services/http/http-error.interceptor';


const appRoutes: Routes = [
  {path: '', loadChildren: './modules/products/products.module#ProductsModule'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about_us', component: AboutUsComponent},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    AboutUsComponent,
    HeaderNavComponent,
    HeaderAuthBlockComponent,
    PageNotFoundComponent,
    CurrentUserBlockComponent,
    AuthButtonsBlockComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
