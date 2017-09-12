const ManifestPlugin = require('webpack-manifest-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

require.extensions['.css'] = () => {
    return;
};



let debug = true;

if (process.env.NODE_ENV == "stage" || process.env.NODE_ENV == "preProd" || process.env.NODE_ENV == "production") {
    debug = false;
}

console.log("webpack debug", debug);
console.log("webpack process.env.NODE_ENV", process.env.NODE_ENV);


const vendorPackages = [
    'smoothscroll-polyfill',
    'superagent',
    'react-document-meta',
    'lscache',
    'lodash',
    'axios',
    'react',
    'react-router',
    'react-dom',
    'radium',
    'react-dropzone',
    'react-infinite-scroller',
    'react-scrollable-anchor',
    'react-select'
];

module.exports = {
    devtool: debug ? 'eval' : 'cheap-source-map',

    entry: debug ?
        [
            'webpack-hot-middleware/client',
            './src/client'
        ] :
        {
            vendor: vendorPackages,
            bundle: path.join(__dirname, 'src', 'client.js')
        },

    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        publicPath: "/js/",
        filename: debug ? 'bundle.js' : '[name]-[chunkhash].js',
        chunkFilename: "[name]-[chunkhash].js"
        // filename: 'bundle.js'
    },

    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
        ],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                loaders: 'babel-loader',
                query: {
                    cacheDirectory: 'babel_cache',
                    presets: debug ? ['react', 'es2015', 'react-hmre', 'stage-0'] : ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['src/static/js'], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: ['build-manifest.js']
        }),


        new ManifestPlugin({
            fileName: 'build-manifest.json'
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // new LodashModuleReplacementPlugin({
        //     'shorthands': true,
        //     'collections': true,
        // }),
    ].concat(debug ?
        [
            // new BundleAnalyzerPlugin(),
        ] :
        [
            new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true }),

            // new webpack.optimize.UglifyJsPlugin({
            //     compress: { warnings: true },
            //     // mangle: true,
            //     // sourcemap: true,
            //     // beautify: false,
            //     // dead_code: true
            // }),


            // new CommonsChunkPlugin({
            //     name: 'common',
            //     filename: 'commons-[hash:8].js',
            //     chunks: ['vendor', 'bundle']
            // }),

            // new BundleAnalyzerPlugin(),

            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.[hash].js',
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({ name: 'meta', chunks: ['vendor'], filename: 'meta.[hash].js' }),
            // new webpack.optimize.CommonsChunkPlugin({ name: 'common', chunks: ['pfDetail', 'home', 'mfDetail', 'profile', 'explore', 'categoryMain', 'amcMain', 'pfBaseSearch', 'mfBaseSearch', 'aboutUs', 'categoryLanding', 'amcLanding', 'createPortfolio', 'createMyInvestmentPortfolio', 'createOrder', 'createPfOrder', 'confirmOrder', 'onboarding', 'viewOrder', 'viewSip', 'transaction', 'notFound', 'confirmSip', 'template', 'proHome', 'login', 'loginOther', 'search', 'register', 'createAccount', 'dashboard', 'notifications', 'questionAsk', 'questionDraft', 'questionEdit', 'questionMain', 'questionAll', 'forgotPassword', 'mfWithAmount', 'referal', 'loanmeet'], filename: 'common.[hash].js', minChunks: 2 }),
            new webpack.optimize.CommonsChunkPlugin({ name: 'common', chunks: ['pfDetail', 'home', 'mfDetail', 'profile', 'explore', 'categoryMain', 'amcMain', 'pfBaseSearch', 'mfBaseSearch', 'aboutUs', 'categoryLanding', 'amcLanding', 'createPortfolio', 'createMyInvestmentPortfolio', 'createOrder', 'createPfOrder', 'confirmOrder', 'onboarding', 'viewOrder', 'viewSip', 'transaction', 'notFound', 'confirmSip', 'template', 'proHome', 'login', 'loginOther', 'search', 'register', 'createAccount', 'dashboard', 'notifications', 'questionMain', 'forgotPassword', 'mfWithAmount', 'referal', 'loanmeet'], filename: 'common.[hash].js', minChunks: 2 }),
            new webpack.optimize.CommonsChunkPlugin({ name: 'mcommon', chunks: ['mpfDetail', 'mhome', 'mmfDetail', 'mprofile', 'mexplore', 'mcategoryMain', 'mamcMain', 'mpfBaseSearch', 'mmfBaseSearch', 'maboutUs', 'mcategoryLanding', 'mamcLanding', 'mcreatePortfolio', 'mcreateMyInvestmentPortfolio', 'mcreateOrder', 'mcreatePfOrder', 'mconfirmOrder', 'monboarding', 'mviewOrder', 'mviewSip', 'mtransaction', 'mnotFound', 'mconfirmSip', 'mtemplate', 'mproHome', 'mlogin', 'mloginOther', 'msearch', 'mregister', 'mcreateAccount', 'mquestionMain', 'mdashboard', 'mnotifications', 'mforgotPassword', 'mmfWithAmount', 'mreferal', 'mloanmeet'], filename: 'mcommon.[hash].js', minChunks: 2 }),
            // new webpack.optimize.CommonsChunkPlugin({ name: 'mcommon', chunks: ['mpfDetail', 'mhome', 'mdashboard', 'mmfDetail', 'mcreateOrder', 'maboutUs', 'mcreatePfOrder', 'monboarding', 'mconfirmOrder', 'mexplore', 'mviewOrder', 'mcategoryMain', 'mamcMain', 'mviewSip', 'mtransaction', 'mcategoryLanding', 'mamcLanding', 'mconfirmSip', 'm_not_found', 'mlogin', 'mloginOther', 'msearch', 'mregister', 'mcreateAccount', 'mpfBaseSearch', 'mcreatePortfolio', 'mcreate_my_investment_portfolio', 'mproHome'], filename: 'mcommon.[hash].js', minChunks: 2 }),
            new webpack.NamedModulesPlugin()

            // new CompressionPlugin({
            //     asset: "[path][query]",
            //     algorithm: "gzip",
            //     // test: /\.js$|\.css$|\.html$/,
            //     test: /\.(js|html|css)$/,
            //     threshold: 10240,
            //     minRatio: 0.8
            // }),

        ])

}
