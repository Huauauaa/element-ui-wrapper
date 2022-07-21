const path = require("path");
//定义 resolve 方法，把相对路径转换成绝对路径
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // assetsDir: "./",
  publicPath: "./",
  assetsDir: "static",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    // config.module
    //   .rule("js")
    //   .include.add("/src/components")
    //   .end()
    //   .use("babel")
    //   .loader("babel-loader")
    //   .tap((options) => {
    //     return options;
    //   });

    config.resolve.alias.set("@", resolve("src"));

    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({ bypassOnDebug: true });
  },
};
