var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

if (process.env.NODE_ENV === 'production') {
  process.env.ENV = process.env.NODE_ENV = 'production';
}
else {
  process.env.ENV = process.env.NODE_ENV = 'development';
}

console.log("Building Judex Module [mode: " + process.env.NODE_ENV + "] [" + __dirname + "]");

module.exports = (env, argv) => {
  console.log('using mode', argv.mode);
  return {
    entry: './src/app/main.ts',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'judex.js'
    },
    module: {
      rules: [
        { test: /\.ts$/, use: 'ts-loader' },
        { test: /\.html$/, use: 'html-loader' },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, './src/app'),
          use: ['to-string-loader','css-loader']
        }
      ]
    },
    devtool: "source-map",
    resolve: {
      modules: [ path.join(__dirname, './src'), 'node_modules' ],
      extensions: [ '.js', '.ts' ]
    },
    plugins: getPlugins(argv.mode)
  };
};

function getPlugins(mode) {
  var plugins = [];
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'ENV': JSON.stringify(mode),
      'NODE_ENV': JSON.stringify(mode)
    }
  }));
  plugins.push(new webpack.ContextReplacementPlugin(
    /\@angular(\\|\/)core(\\|\/)esm5/,
    path.resolve(__dirname, './src')
  ));
  plugins.push(new HtmlWebpackPlugin({
    template: './src/index.html'
  }));
  return plugins;
}
