import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';


import { registerLocaleData } from '@angular/common';
import localeRuUa from '@angular/common/locales/ru-UA';

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
import { AngularEditorModule } from '@kolkov/angular-editor';

import {ProductsModule} from './modules/products/products.module';
import {AdminModule} from './modules/admin/admin.module';

import {CurrentUserBlockComponent} from './components/header/header-auth-block/current-user-block/current-user-block.component';
import {AuthButtonsBlockComponent} from './components/header/header-auth-block/auth-buttons-block/auth-buttons-block.component';
import {LoginComponent} from './components/windows/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './components/windows/register/register.component';
import {SharedModule} from './modules/shared/shared.module';
import {ContactsService} from './services/http/contacts/contacts.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthResultComponent } from './components/windows/auth-result/auth-result.component';
import { InputActiveBorderDirective } from './directives/input-active-border.directive';
import {InputChangeWidthDirective} from './directives/input-change-width.directive';

registerLocaleData(localeRuUa, 'RuUa');

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
    RegisterComponent,
    AuthResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularEditorModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgMofhJxwMZCzZoIass33M98elHnblts8'
    })
  ],
  providers: [CookieService, { provide: LOCALE_ID, useValue: 'RuUa' }, ContactsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
