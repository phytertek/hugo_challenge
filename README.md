# Hugo Health Challenge

## Build Command

<code>$ docker build -t hugo</code>

---

## Run Command

<code>$ docker run hugo {currency name}</code>

---

### Create a GitHub repo that contains a program that can be built and run in Docker that has the following characteristics:

* The Docker run command runs a program that takes 1 argument which is a crypto-currency name (bitcoin, ethereum, etc)
* If there is no crypto-currency name provided, an error is acceptable that tells the user how to run.
* When the currency name is provided, it calls a CoinMarketCap API that fetches the current data on the coin.
* The program's output should display the USD price and the market cap in USD of the given crypto-currency.
* Provide Docker build instructions in the README of the repository
* Provide Docker run instructions in the README of the repository
* The actual software that is run by Docker must be implemented and written in Java, JavaScript, or Python and written by you, and no bash-only software - the API call and argument handling must be handled in the program that is also committed to the repository.
