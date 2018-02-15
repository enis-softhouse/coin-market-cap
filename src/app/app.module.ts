import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {store, IAppState} from './store';

import {CryptoCurrencyListComponent} from './presentation/crypto-currency-list/crypto-currency-list.component';
import {CryptoCurrencyDetailsComponent} from './presentation/crypto-currency-details/crypto-currency-details.component';
import {MenuComponent} from './presentation/menu/menu.component';

import {CryptoCurrencyService} from './api/crypto-currency.service';

import {CryptoCurrencyActions} from './actions/crypto-currency.action';
import {CurrencyActions} from './actions/currency.action';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CryptoCurrencyListComponent,
    CryptoCurrencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    CryptoCurrencyService,
    CryptoCurrencyActions,
    CurrencyActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
