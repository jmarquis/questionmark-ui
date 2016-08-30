const pkg = require("./package.json")
const path = require("path")

const src = path.join(__dirname, "src")

module.exports = {

  devtool: "source-map",

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
      path.resolve("./src/components"),
      path.resolve("./src/styles"),
      "node_modules"
    ]

  },

  entry: [
    "react-hot-loader/patch",
    "./src/index.jsx",
    "./src/index.html"
  ],

  module: {

    loaders: [

      {
        test: /\.html?$/,
        include: src,
        loader: "file",
        query: {
          name: "[name].[ext]"
        }
      },

      {
        test: /\.jsx?$/,
        include: src,
        loader: "babel"
      },

      {
        test: /\.less$/,
        include: src,
        loaders: [
          "style",
          "css",
          "postcss",
          "less"
        ]
      }

    ],

  },

  postcss() {
    return [require("autoprefixer")]
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: `${pkg.name}.js`
  }

}
