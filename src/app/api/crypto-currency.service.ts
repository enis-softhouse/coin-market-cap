import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ICryptoCurrency } from '../modules/crypto-currency';
import { baseUrl } from '../shared/constants';

@Injectable()
export class CryptoCurrencyService{

    constructor(
        private _http: Http
    ){ }

    getCryptoCurrencies(currency:string){
        return this._http.get(baseUrl + '?convert=' + currency)
        .map((response: Response) => <ICryptoCurrency[]>response.json())
    }
}