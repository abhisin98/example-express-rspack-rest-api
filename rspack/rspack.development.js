// const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const ESLintPlugin = require("eslint-rspack-plugin");
const path = require("path");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");
const { TsCheckerRspackPlugin } = require("ts-checker-rspack-plugin");
const WebpackBar = require("webpackbar/rspack");

// ------------------------------- Rspack -------------------------------
/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: "development",
  entry: {
    index: ["@rspack/core/hot/poll?100"],
  },
  optimization: {
    minimize: false,
  },
  devtool: "cheap-source-map",
  plugins: [
    new RunScriptWebpackPlugin({
      name: "index.js",
      autoRestart: false,
    }),
    new ESLintPlugin({
      // cwd: __dirname,
      files: "./src/**/*.{js,ts}",
      emitWarning: true,
      emitError: true,
      useEslintrc: true,
    }),
    new TsCheckerRspackPlugin({
      devServer: true,
      typescript: {
        configFile: path.resolve(__dirname, "..", "./tsconfig.json"),
      },
    }),
    // new FriendlyErrorsWebpackPlugin({}),
    new WebpackBar({
      /* options */
    }),
  ].filter(Boolean),
  watchOptions: {
    // for some systems, watching many files can result in a lot of CPU or memory usage
    // https://webpack.js.org/configuration/watch/#watchoptionsignored
    // don't use this pattern, if you have a monorepo with linked packages
    ignored: /node_modules/,
  },
  devServer: {
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};

module.exports = config;
