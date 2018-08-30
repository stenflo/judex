# fullstack-challenge-server

### Pre-requisites:

* NPM (Node Package Manager)
* Node.js Runtime

### To build from source:

Go to the fullstack-challenge-server directory and install package dependencies with NPM. Also, provide the `.env` file, based on the example file included.

```sh
$ cd fullstack-challenge-server
$ npm install
$ cp .env.example .env
```

### To run the server:

Start the server in your console (in development mode).

```sh
$ npm run start
```

While you have the server running in your console you can make a request directly with your browser. Without requiring the client module, you can request the data directly with the following url.

http://localhost:3030/api/v1/market/btc_eth/orderbook

 (If you changed the host or the port in the `.env` file, please change the URL accordingly.)

Note: This URL will only let you see the raw data in JSON format. To see the user interface display of the data you must run the *[client](../fullstack-challenge-client)* application.