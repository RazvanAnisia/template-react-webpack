const path = require("path");
//this plugin creates the index.html for us,
const HtmlWebpackPlugin = require("html-webpack-plugin");

//entry file -
//output = where our compiled code will go(bundle)
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.bundled.js"
  },
  //specify loader
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
      {
        //using this regExp we are looking for anything that is a js file
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
