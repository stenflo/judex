# Fullstack Code Challenge

### The Challenge:
Build a combined order book that takes the full order books from Bittrex and Poloniex for the BTC_ETH market and displays them in a way that shows combined volume at each price point.

### Additional challenge requirements:
* Please complete the challenge in Nodejs
* Clearly label which is ask book and which is the bids book
* Clearly label which exchange has order volume at each price point
* Please host a demo of the code running online (free heroku site or similar)

### Extra points for:
* More exchanges
* Allow user to switch to different markets (the BTC_DOGE market for example)
* Highlight if the books overlap (ie bids on Bittrex overlap with asks on Poloniex)
* Actively updating the combined order book based on actual trades from the exchanges
* Unit Tests

### Challenge Solution:
* The solution provided consists of two modules, the *[client](./fullstack-challenge-client)* and the *[server](./fullstack-challenge-server)*. The source code is provided to build each of these from source with NPM (Node Package Manager).
* The server module provides the aggregated order book data from multiple exchanges.
* The client module provides the user interface components that can be loaded into a web browser.
* The client module depends on the server module to provide the data.
* This solution provides all the challenge requirements while demonstrating a typical web architecture consisting of client-side and server-side components.
* A live demo of the application is available *[HERE](http://erik.olof.stenflo.org)*.

### Installation:
First clone the git repository and go to the project directory.
```sh
$ git clone https://github.com/stenflo/fullstack-challenge.git
$ cd fullstack-challenge
```

Within this project there are two modules. Please see the documentation for each of these modules, to build them from source and run them side by side.
* *[fullstack-challenge-client](./fullstack-challenge-client)*
* *[fullstack-challenge-server](./fullstack-challenge-server)*

### Additional Notes:
The solution provides highlighing of price points when the books overlap, as specified in the "extra points". Such events happen only on occasion, so one must be patient to see them occur. Demonstrating such cross-exchange arbitrages is the essential value of this application. Additional markets are provided to scout for such arbitrages, a select box allows you to flip between them. A preferences page allows you to choose exchanges.

Happy Scouting!

### License
This software is free and open source.
created by *[Erik Stenflo](https://github.com/stenflo)*
