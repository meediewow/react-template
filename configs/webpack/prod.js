// production config
const { merge } = require("webpack-merge");
const { resolve, join } = require("path");
const webpack = require("webpack");

const dotenv = require("dotenv").config({
    path: join(resolve(__dirname, "../.."), ".env.production"),
});

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
    mode: "production",
    entry: "./index.tsx",
    output: {
        filename: "js/bundle.[contenthash].min.js",
        path: resolve(__dirname, "../../dist"),
        publicPath: "/",
    },
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed),
        }),
    ],
});
