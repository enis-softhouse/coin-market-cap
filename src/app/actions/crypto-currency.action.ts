import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store';
import {CryptoCurrencyService} from '../api/crypto-currency.service';

export const GET_CRYPTOCURRENCIES = 'GET_CRYPTOCURRENCIES';

@Injectable()
export class CryptoCurrencyActions {

  constructor(private ngRedux: NgRedux<IAppState>,
              private cryptoCurrencyService: CryptoCurrencyService) {
  }

  getCryptoCurrencies() {
    let _state = this.ngRedux.getState();
    this.cryptoCurrencyService.getCryptoCurrencies((_state) ? _state.currency : 'USD')
      .subscribe(cryptoCurrencies => {
        this.ngRedux.dispatch({
          type: GET_CRYPTOCURRENCIES,
          cryptoCurrencies
        });
      });
  }
}
