const https = require('https');

const currency = process.argv[2];
if (!currency) return console.error('Please provide a currency name');

https
  .get(
    `https://api.coinmarketcap.com/v1/ticker/${currency.toLowerCase()}/?convert=USD`,
    response => {
      let data = '';
      response.on('data', chunk => (data += chunk));

      response.on('end', () => {
        const result = JSON.parse(data);
        if (result.error)
          return console.error(`${currency} is not a valid currency`);

        const { price_usd, market_cap_usd } = result[0];

        return console.log(
          `Current ${currency} data (USD):\n` +
            ` Price: $${price_usd}\n` +
            ` Market Cap: $${market_cap_usd}`
        );
      });
    }
  )
  .on('error', err => console.error(err));
