const path = require('path');

const config = {
    entry: {
        'index': `./index.ts`,
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'CryptoFont',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
    },
    externals: {
        'icon-font-generator': 'icon-font-generator',
        'crypto-coin-icons': 'crypto-coin-icons',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
            },
            {
                type: 'javascript/auto', // <= Set the module.type explicitly
                test: /\.json$/, // Maybe better to use a different extname (e.g /\.config\.json$/)
                loader: 'json-loader',
            },
            {
                test: /\.svg$/,
                loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=[name].[ext]',
            },
            {
                test: /\.woff$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]',
            },
            {
                test: /\.woff2$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]',
            },
            {
                test: /\.[ot]tf$/,
                loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]',
            },
            {
                test: /\.eot$/,
                loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]',
            },
        ],
    },
};

module.exports = config;
