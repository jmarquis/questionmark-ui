const pkg = require("./package.json")
const path = require("path")
const webpack = require("webpack")

const src = path.join(__dirname, "src")

module.exports = {

  devtool: "source-map",

  resolve: {

    extensions: [
      ".js",
      ".jsx",
      ".less",
      ".css",
      ".svg"
    ],

    modules: [
      path.resolve("./src/components"),
      path.resolve("./src/styles"),
      path.resolve("./src"),
      "node_modules"
    ]

  },

  entry: [
    "react-hot-loader/patch",
    "whatwg-fetch",
    "./src/index.jsx",
    "./src/index.html"
  ],

  module: {

    rules: [

      {
        test: /\.html?$/,
        include: src,
        use: "file-loader",
        options: {
          name: "index.html"
        }
      },

      {
        test: /\.jsx?$/,
        include: src,
        use: "babel-loader"
      },

      {
        test: /\.less$/,
        include: src,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [
                  require("postcss-import"),
                  require("autoprefixer")
                ]
              }
            }
          },
          "less-loader"
        ]
      }

    ],

  },

  output: {
    path: path.join(__dirname, "build"),
    filename: `${pkg.name}.js`
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      postcss() {
        return [require("autoprefixer")]
      }
    })
  ]

}
