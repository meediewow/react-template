// development config
const { merge } = require("webpack-merge");
const { join, resolve } = require("path");
const webpack = require("webpack");
const commonConfig = require("./common");
const dotenv = require("dotenv").config({
    path: join(resolve(__dirname, "../.."), ".env.development"),
});
const APP_PORT = +dotenv.parsed.APP_PORT;
module.exports = merge(commonConfig, {
    mode: "development",
    entry: [
        "react-hot-loader/patch", // activate HMR for React
        `webpack-dev-server/client?http://localhost:${APP_PORT}`, // bundle the client for webpack-dev-server and connect to the provided endpoint
        "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
        "./index.tsx", // the entry point of our app
    ],
    devServer: {
        historyApiFallback: true,
        open: true,
        hot: true, // enable HMR on the server
        port: APP_PORT,
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed),
        }),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    ],
});
