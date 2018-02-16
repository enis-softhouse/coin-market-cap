import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { ICryptoCurrency } from '../../modules/crypto-currency';
import { CryptoCurrencyActions } from '../../actions/crypto-currency.action';

@Component({
  selector: 'app-crypto-currency-list',
  templateUrl: './crypto-currency-list.component.html',
  styleUrls:['./crypto-currency-list.component.css']
})
export class CryptoCurrencyListComponent implements OnInit {

  @select('cryptoCurrencies') cryptoCurrencies$: Observable<ICryptoCurrency>;
  @select('currency') currency$: Observable<string>;

  constructor(
    private cryptoCurrencyActions: CryptoCurrencyActions
  ) { }

  ngOnInit() {
    this.cryptoCurrencyActions.getCryptoCurrencies();
  }
}
