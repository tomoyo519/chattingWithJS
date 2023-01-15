// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: {
//     main: "./src/script/index.js",
//   },
//   output: {
//     filename: "[name].html",
//     path: path.resolve("./"),
//   },
//   devServer: {
//     port: 9000,
//   },
// };

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/script/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "[name].js",
  },
  devServer: {
    // webpack dev server 설정
    static: path.resolve(__dirname + "/src"),
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
