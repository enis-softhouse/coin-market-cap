export class ICryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  price_usd: string;
  price_btc: string;
  '24h_volume_usd': string;
  market_cap_usd: string;
  available_supply: string;
  total_supply: string;
  max_supply: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  last_updated: string;
  price_eur?: string;
  '24h_volume_eur' ?: string;
  market_cap_eur?: string;
  price_cny?: string;
  '24h_volume_cny'?: string;
  market_cap_cny?: string;
}
