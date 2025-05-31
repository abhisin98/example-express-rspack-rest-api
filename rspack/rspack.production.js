const rspack = require("@rspack/core");
const ESLintPlugin = require("eslint-rspack-plugin");
// const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const path = require("path");
const { TsCheckerRspackPlugin } = require("ts-checker-rspack-plugin");
const WebpackBar = require("webpackbar/rspack");

// ------------------------------- Rspack -------------------------------
/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new rspack.SwcJsMinimizerRspackPlugin({})],
  },
  plugins: [
    new ESLintPlugin({
      // cwd: __dirname,
      cache: false,
      files: "./src/**/*.{js,ts}",
      emitWarning: true,
      emitError: true,
      // failOnWarning: true,
      failOnError: true,
      quiet: false,
      useEslintrc: true,
    }),
    new TsCheckerRspackPlugin({
      devServer: false,
      typescript: {
        configFile: path.resolve(__dirname, "..", "./tsconfig.json"),
      },
    }),
    // new FriendlyErrorsWebpackPlugin(),
    new WebpackBar({
      /* options */
    }),
  ],
  devtool: "source-map",
};

module.exports = config;
