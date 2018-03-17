module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.output.publicPath(process.env.NODE_ENV === "production" ? "/contractExample" : "/");
  }
};