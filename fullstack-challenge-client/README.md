# fullstack-challenge-client

### Pre-requisites:

* NPM (Node Package Manager)
* fullstack-challenge-server

### To build from source:

Go to the project directory and install package dependencies with NPM.

```sh
$ cd fullstack-challenge-client
$ npm install
```

### To run the client application:

First you need to have the server application running. (see *[fullstack-challenge-server](../fullstack-challenge-server)*)

While the server is running in one console window, open another console window and start the client.

```sh
$ cd fullstack-challenge-client
$ npm run dev-server
```

This will start the "development server" on port 8081 for the client application. (The port is specified in package.json if you want to change it.)

While you have both server and the client running in two seperate consoles you can access the client application in your browser with the following url:

http://localhost:8081

Note: The client will attempt to connect with the server. You can configure the client settings (see *[src/app/AppSettings.ts](./src/app/app.settings.ts)*). The client will otherwise try to connect with the server at it's default location (localhost:3030).