# Hugo Health Challenge

My strategy while completing this challenge was to take most minimalist approach possible with the given requirements.

I chose to use the node:alpine image for the docker container and initialize node and the index.js files as the docker ENTRYPOINT in order to easily pipe aditional arguments given to the docker run command directly to the node script.

The script expects a single argument, throwing an error if one is not included. It then uses the native node https library to create the GET request to the CoinMarketCap API with the given currency argument. If no results are found for the given currency, an error is thrown. If results are recieved, the price_usd and market_cap_usd properties of the result are logged to the console.

I chose to use the https library in order to keep the script free of dependencies, allowing the build phase to skip package installation entirely.

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
