// shared config (dev and prod)
const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const environment = require("./environment");

module.exports = {
    resolve: {
        modules: [resolve(__dirname, "../../src"), "node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    context: resolve(__dirname, "../../src"),
    module: {
        rules: [
            {
                test: /\.(gql)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "graphql-tag/loader",
                    },
                ],
            },
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                    },
                ],
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __ENVIRONMENT__: environment,
        }),
        new HtmlWebpackPlugin({ template: "index.html" }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolve(__dirname, "../../src/assets"),
                    to: "assets",
                },
            ],
        }),
    ],
    performance: {
        hints: false,
    },
};
