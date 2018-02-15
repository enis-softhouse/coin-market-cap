import { ICryptoCurrency } from '../modules/crypto-currency';

export interface IAppState {
    cryptoCurrencies: ICryptoCurrency[],
    currency: string
}