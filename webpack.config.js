module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },watch: true,
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }
};
