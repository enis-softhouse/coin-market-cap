import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import {CurrencyActions} from '../../actions/currency.action';
import {CryptoCurrencyActions} from '../../actions/crypto-currency.action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public currency$ = this.currencyActions.getCurrency();

  @Output() action = new EventEmitter();

  constructor(public currencyActions: CurrencyActions,
              private cryptoCurrencyActions: CryptoCurrencyActions) {
  }

  changeCurrency(currency) {
    this.currencyActions.setCurrency(currency);
    this.currency$ = this.currencyActions.getCurrency();
    this.action.emit();
  }

  ngOnInit() {
  }
}
