import {ICryptoCurrency} from '../modules/crypto-currency';
import {IAppState} from './IAppState';
import {GET_CRYPTOCURRENCIES} from '../actions/crypto-currency.action';
import {SET_CURRENCY} from '../actions/currency.action';

const initalState: IAppState = {
  cryptoCurrencies: [],
  currency: 'USD'
};

function storeCryptoCurrencies(state, action): IAppState {
  return Object.assign({}, state, {
    cryptoCurrencies: action.cryptoCurrencies
  });
}

function setCurrency(state, action): IAppState {
  return Object.assign({}, state, {
    currency: action.currency
  });
}

export function reducer(state = initalState, action) {
  switch (action.type) {
    case GET_CRYPTOCURRENCIES:
      return storeCryptoCurrencies(state, action);
    case SET_CURRENCY:
      return setCurrency(state, action);
    default:
      return state;
  }
}
