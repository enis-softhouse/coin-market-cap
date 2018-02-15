import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { Observable } from 'rxjs/Observable';

import { CurrencyActions } from '../../actions/currency.action';
import { CryptoCurrencyActions } from '../../actions/crypto-currency.action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(
    private currencyActions: CurrencyActions,
    private cryptoCurrencyActions: CryptoCurrencyActions
  ) {
  }

  changeCurrency(currency){
      this.currencyActions.setCurrency(currency);
      this.cryptoCurrencyActions.getCryptoCurrencies();
  }

  ngOnInit() {
  }
}