import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store';

export const SET_CURRENCY = 'SET_CURRENCY';

@Injectable()
export class CurrencyActions {

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  setCurrency(currency: string) {
    this.ngRedux.dispatch({
      type: SET_CURRENCY,
      currency
    });
  }

  getCurrency() {
    const _state = this.ngRedux.getState();
    return (_state) ? _state.currency : 'USD';
  }
}
