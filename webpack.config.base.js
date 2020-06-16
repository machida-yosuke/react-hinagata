const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const readConfig = require("read-config");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/index.ejs",
  templateParameters: {
    title: "React and Webpack4",
  },
  filename: "./index.html",
});

// base config
const SRC = "./src";
const DEST = "./dist";

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const constants = readConfig(`${SRC}/constants.yml`);
const {
  BASE_DIR
} = constants;

module.exports = {
  mode: "production",
  entry: `${SRC}/index.tsx`,
  output: {
    path: path.resolve("dist"),
    filename: "[name][hash].js",
    publicPath: BASE_DIR,
  },
  cache: true,
  devServer: {
    historyApiFallback: true,
    host: HOST,
    port: PORT,
    open: true,
    inline: true,
    overlay: true,
    disableHostCheck: true,
    useLocalIp: true,
    contentBase: DEST,
    openPage: path.relative("/", BASE_DIR),
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 100 * 1024, // 100KB以上だったら埋め込まずファイルとして分離する
            name: "./img/[name].[ext]",
          },
        }, ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: "all",
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, SRC),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  performance: {
    hints: false
  }, //WARNING in webpack performance recommendations: You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
  plugins: [
    htmlWebpackPlugin,
    new CopyPlugin([{
      from: path.resolve(__dirname, SRC + "/static"),
      to: path.relative("/", BASE_DIR + "/static"),
    }, ]),
  ],
};