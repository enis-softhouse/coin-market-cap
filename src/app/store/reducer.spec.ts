import {reducer} from './reducer';
import {SET_CURRENCY} from '../actions/currency.action';
import {GET_CRYPTOCURRENCIES} from '../actions/crypto-currency.action';

describe('Reducer', () => {
  it('check initial state', () => {
    const state = reducer(undefined, {});

    expect(state.currency).toBe('USD');
    expect(state.cryptoCurrencies.length).toBe(0);
  });

  it('change initial state', () => {
    const state = reducer({
      cryptoCurrencies: [],
      currency: 'EUR'
    }, {});

    expect(state.currency).toBe('EUR');
    expect(state.cryptoCurrencies.length).toBe(0);
  });

  it('check set currency', () => {
    const state = {
      cryptoCurrencies: [],
      currency: 'EUR'
    };

    const newState = reducer(state, {type: SET_CURRENCY, currency: 'USD'});
    expect(newState.currency).toBe('USD');
    expect(newState.cryptoCurrencies.length).toBe(0);
  });

  it('check store crypto currencies', () => {
    const state = {
      cryptoCurrencies: [{
        '24h_volume_usd': '9037930000.0',
        available_supply: '16867087.0',
        id: 'bitcoin',
        last_updated: '1518737666',
        market_cap_usd: '171295388737',
        max_supply: '21000000.0',
        name: 'Bitcoin',
        percent_change_1h: '1.31',
        percent_change_7d: '24.38',
        percent_change_24h: '7.65',
        price_btc: '1.0',
        price_usd: '10155.6',
        rank: '1',
        symbol: 'BTC',
        total_supply: '16867087.0'
      }],
      currency: 'USD'
    };

    const newCryptoCurrencies = [{
      '24h_volume_usd': '0',
      available_supply: '0',
      id: 'bitcoin2',
      last_updated: '0',
      market_cap_usd: '0',
      max_supply: '0',
      name: 'Bitcoin2',
      percent_change_1h: '0',
      percent_change_7d: '0',
      percent_change_24h: '0',
      price_btc: '0',
      price_usd: '0',
      rank: '0',
      symbol: 'BTC2',
      total_supply: '0'
    }];

    const newState = reducer(state, {type: GET_CRYPTOCURRENCIES, cryptoCurrencies: newCryptoCurrencies});

    expect(newState.currency).toBe('USD');
    expect(newState.cryptoCurrencies.length).toBe(1);
    expect(newState.cryptoCurrencies[0].id).toBe('bitcoin2');
  });

});
