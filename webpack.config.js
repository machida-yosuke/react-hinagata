const portfinder = require("portfinder");
const webpackConfig = require("./webpack.config.base");

portfinder.basePort = webpackConfig.devServer.port;

module.exports = portfinder
  .getPortPromise()
  .then((port) => {
    console.log("port", port);
    webpackConfig.devServer.port = port;
    return webpackConfig;
  })
  .catch((err) => {
    console.log("port", err);
    return err;
  });
