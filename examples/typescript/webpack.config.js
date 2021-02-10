const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  watch: false,
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", "*"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 4444,
    publicPath: "http://localhost:4444/dist/",
    hotOnly: true,
  },
};
