const TerserPlugin = require("terser-webpack-plugin"); // just the default one
const path = require("path");
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,"src/main.js"), //why on earth does it need an absolute path
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    }
};