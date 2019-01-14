# judex-client

### Pre-requisites:

* NPM (Node Package Manager)
* judex-server

### To build from source:

Go to the judex-client directory and install package dependencies with NPM.

```sh
$ cd judex-client
$ npm install
```

### To run the client application:

Start the client.

```sh
$ npm run dev-server
```

This will start the "development server" on port 8081 for the client application. (The port is specified in package.json if you want to change it.)

You also need to have the server application running. (see *[judex-server](../judex-server)*) If you don't already have the server running, open another console window and start the server, so you have both client and server running side by side.

While you have both server and the client running in two seperate consoles you can access the client application in your browser with the following url:

http://localhost:8081

Note: The client will attempt to connect with the server. You can configure the client settings (see *[src/app/app.settings.ts](./src/app/app.settings.ts)*). The client will otherwise try to connect with the server at it's default location (localhost:3030).