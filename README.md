# Code Challenge

This challenge has been reappropriated...

### JUDEX
The concept of Judex is a third-level agent. While a general referee or arbitrator is considered a second-level agent, such refree may appoint another agent for a dispute. The name JUDEX was chosen for the project because the main purpose is to identify arbitration tribunal between two different second-level agents. The Judex application allows you to monitor the combined order books from two different crypto exchanges in realtime to assist in the identification of cross-exchange arbirage opportunities. The application refreshes the combined order books on a one-second interval and provides visual indicators when arbitrage opportunities arise, illustrating liquidity potential.

The definition of JUDEX (Merriam-Webster dictionary):
1 : a private person appointed in Roman law to hear and determine a case and corresponding most nearly to a modern referee or arbitrator appointed by the court.
2: JUDGE
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
* Highlight if the books overlap (ie bids on Bittrex overlap with asks on Poloniex)
* Actively updating the combined order book based on actual trades from the exchanges
* Unit Tests

### Challenge Solution:
* The solution provided consists of two modules, the *[client](./fullstack-challenge-client)* and the *[server](./fullstack-challenge-server)*. The source code is provided to build each of these from source with NPM (Node Package Manager).
* The server module provides the aggregated order book data from multiple exchanges.
* The client module provides the user interface components that can be loaded into a web browser.
* This solution provides all the challenge requirements while demonstrating a typical web architecture consisting of client-side and server-side components.
* The solution is intentionally simple, for demonstration purposes.
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

### Arbirage Identification:
The JUDEX application will highlight the price points where order books overlap (ie bids on Bittrex overlap with asks on Poloniex). Such events happen only on occasion, so one must be patient to see them occur. Additional markets are provided to scout for such arbitrages. A select box allows you to flip between them. A preferences page allows you to choose exchanges to pair.

Happy Scouting!

### License
This software is free and open source.
created by *[Erik Stenflo](https://github.com/stenflo)*
