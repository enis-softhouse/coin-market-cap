import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CryptoCurrencyListComponent} from './presentation/crypto-currency-list/crypto-currency-list.component';
import {CryptoCurrencyDetailsComponent} from './presentation/crypto-currency-details/crypto-currency-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/crypto-currencies', pathMatch: 'full'},
  {path: 'crypto-currencies', component: CryptoCurrencyListComponent},
  {path: 'crypto-currency/:id', component: CryptoCurrencyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
