import { Component, OnInit } from '@angular/core';
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
