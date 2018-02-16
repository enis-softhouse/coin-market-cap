import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CurrencyActions} from '../../actions/currency.action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public currency$ = this.currencyActions.getCurrency();

  @Output() action = new EventEmitter();

  constructor(public currencyActions: CurrencyActions) {
  }

  changeCurrency(currency) {
    this.currencyActions.setCurrency(currency);
    this.currency$ = this.currencyActions.getCurrency();
    this.action.emit();
  }

  ngOnInit() {
  }
}
