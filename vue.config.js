/* global module, process */
const publicPath =
  process.env.NODE_ENV === "production" ? "/contractExample" : "/";

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.output.publicPath(publicPath);
  }
};
