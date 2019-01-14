# Judex v1.0

JUDEX is a cross-exchange market analyzer. The JUDEX application allows you to monitor the order books from multiple crypto exchanges and identify cross-exchange arbitrages (i.e. bids on one exchange overlap with asks on another). The application refreshes the order books on regular intervals and provides visual indicators when cross-exchange arbitrage events occur for a given crypto market. Consider a typical exchange that facilitates trades between individual parties A and B, it can be described as a third-party, or an arbitrator for trades. Therefore JUDEX is best understood as an agent to the arbitrator, a fourth-party, a utility for analyzing liquidity potential spanning multiple exchanges and an agent for reconciling arbitration tribunals bewteen sperately arbirated realms.

The definition of JUDEX (Merriam-Webster dictionary):
> 1 : a private person appointed in Roman law to hear and determine a case and corresponding most nearly to a modern referee or arbitrator appointed by the court.
> 2: JUDGE

*JUDEX, JUDI′CIUM.* A Roman magistratus generally did not investigate the facts in dispute in such matters as were brought before him: he appointed a Judex for that purpose, and gave him instructions. *[[Actio, Interdictum.]](http://penelope.uchicago.edu/Thayer/E/Roman/Texts/secondary/SMIGRA*/Judex.html)*

### The Original Challenge:
Build a combined order book that takes the full order books from Bittrex and Poloniex for the BTC_ETH market and displays them in a way that shows combined volume at each price point.

### Additional challenge requirements:
* Please complete the challenge in Nodejs
* Clearly label which is ask book and which is the bids book
* Clearly label which exchange has order volume at each price point
* Please host a demo of the code running online (free heroku site or similar)

### Extra points for:
* More exchanges
* Allow user to switch to different markets (the BTC_DOGE market for example)
* Highlight if the books overlap (i.e. bids on Bittrex overlap with asks on Poloniex)
* Actively updating the combined order book based on actual trades from the exchanges
* Unit Tests

### Challenge Solution:
* The solution provided consists of two modules, the *[client](./judex-client)* and the *[server](./judex-server)*. The source code is provided to build each of these from source with NPM (Node Package Manager).
* The server module provides the aggregated order book data from multiple exchanges.
* The client module provides the user interface components that can be loaded into a web browser.
* This solution provides all the challenge requirements while demonstrating a typical web architecture consisting of client-side and server-side components.
* The solution is intentionally simple, for demonstration purposes.
* A live demo of the application is available *[HERE](http://judex.exchange)*.

### Installation:
First clone the git repository and go to the project directory.
```sh
$ git clone https://github.com/stenflo/judex.git
$ cd judex
```

Within this project there are two modules. Please see the documentation for each of these modules, to build them from source and run them side by side.
* *[judex-client](./judex-client)*
* *[judex-server](./judex-server)*

### Arbitrage Identification:
The JUDEX application will highlight the price points where order books overlap (i.e. bids on Bittrex overlap with asks on Poloniex). Such events happen only on occasion, so one must be patient to see them occur. Additional markets are provided to scout for such arbitrages. A select box allows you to flip between them. A preferences page allows you to choose exchanges to pair.

Happy Scouting!

### License
This software is free and open source.
created by *[Erik Stenflo](https://github.com/stenflo)*
