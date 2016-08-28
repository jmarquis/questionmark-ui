const pkg = require("./package.json");
const path = require("path");

module.exports = {

  resolve: {

    extensions: [
      "",
      ".js",
      ".jsx",
      ".less",
      ".css",
      ".svg"
    ],

    modules: [
      "node_modules"
    ]

  },

  entry: [
    "./src/index.jsx"
  ],

  loaders: [

    {
      test: /\.jsx?$/,
      exclude: "node_modules",
      loader: "babel"
    }

  ],

  output: {
    path: path.join(__dirname, "./build"),
    filename: pkg.name + ".js"
  }

}
