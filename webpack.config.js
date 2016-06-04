var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV || "development";
var _productionBuild = JSON.stringify(NODE_ENV) === '"production"';
var env_API_URL = _productionBuild ? "api" : "http://draft/Branches/ProtoReactPortlet/api";
var ExtractLESS = new ExtractTextPlugin('./Source/styles/main.less');

var vendor_libraries = [
    'jquery',
    'lodash',
    'moment',
    'react',
    'redux',
    'redux-actions',
    'redux-saga',
    'react-dom',
    'react-redux',
    'redux-thunk',
    'classnames',
    'react-motion'
];

var _plugins = [];
var _commonPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'env_API_URL': JSON.stringify(env_API_URL)
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor/vendor.bundle.js')
];

var _devPlugins = [
    // Avoid publishing files when compilation failed
    new webpack.NoErrorsPlugin()
];

var _prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

_plugins = _devPlugins;

if (_productionBuild) {
    _plugins = _prodPlugins;
}

module.exports = {
    entry: {
        storyes: './Source/scripts/client/entry.tsx',
        vendor: vendor_libraries
    },
    root: path.resolve('./'),
    output: {
        path: path.resolve(__dirname, './Built/'),
        publicPath: '/Built/',
        filename: '[name]/[name].js',
        hash: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.ts', '.tsx', '.css', '.less']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }, {
            test: /\.ts(x?)$/,
            loader: 'babel-loader!ts-loader'
        }, {
            test: /\.html$/,
            loader: "file?name=[name].[ext]"
        }, {
            test: /\.css$/,
            loader: "css"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=10000&minetype=image/png"
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        }]
    },
    plugins: _plugins.concat(_commonPlugins),
    stats: {
        // Nice colored output
        colors: true
    },
    watchOptions: {
        aggregateTimeout: 100
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
