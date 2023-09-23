// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV || "production";
const env = NODE_ENV.split(":");
const mode = env[0];
const plugins = [];

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins,
  mode,
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    alias: {
      utils: path.resolve(__dirname, "src/utils/"),
      academy: path.resolve(__dirname, "src/academy/"),
      telegram: path.resolve(__dirname, "src/telegram/"),
      types: path.resolve(__dirname, "src/types/"),
      api: path.resolve(__dirname, "src/api/"),
      const: path.resolve(__dirname, "src/const/"),
      scrapper: path.resolve(__dirname, "src/scrapper/"),
      lib: path.resolve(__dirname, "src/lib/"),
      kraken: path.resolve(__dirname, "src/kraken/"),
      logger: path.resolve(__dirname, "src/logger/"),
      binance: path.resolve(__dirname, "src/binance/"),
      db: path.resolve(__dirname, "src/db/"),
      tinkoff: path.resolve(__dirname, "src/tinkoff/"),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: "ts-loader",
      },
    ],
  },
  target: "node",
  externals: [nodeExternals()],
};
