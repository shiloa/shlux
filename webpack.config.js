var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "./assets/js"),

  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080/static/",
      "webpack/hot/only-dev-server",
      "./app.js"
    ],
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "static", "js"),
    publicPath: "http://localhost:8080/assets"
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { 
        test: /\.(jsx|js)$/,
        loaders: ["react-hot", "jsx", "babel"],
        include: path.join(__dirname, "assets")
      },
      { test: /\.(scss|sass)$/, loaders: ["style", "css", "sass"]},
      { test: /\.(css)$/, loaders: ["style", "css"]},
      { test: /\.(woff|woff2|png|jpg)$/, loader: "url"},
      { test: /\.(json|ttf|eot|svg)$/, loader: "file"},
    ]
  },

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
    root: path.join(__dirname, "./static/js")
  },

};
