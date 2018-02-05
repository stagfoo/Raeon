const path = require("path");

module.exports = {
  entry: "./src/demo.ts",
  devtool: "source-map",
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    publicPath: "/",
    filename: "bundle.js"},

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: ["node_modules", "src", "types"],
    alias: {
        Components: path.resolve(__dirname, 'src/components'),
        Animation: path.resolve(__dirname, 'src/animation'),
        Style: path.resolve(__dirname, 'src/Style'),
    }
  },

  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  }
};
