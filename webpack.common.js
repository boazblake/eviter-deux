const { resolve, join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')

module.exports = {
  node: {
    fs: 'empty',
  },
  context: resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
  },
  output: {
    path: resolve(__dirname, 'docs'),
    filename: '[name]-[hash]-bundle.js',
    chunkFilename: '[name]-[hash]-chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          interpolate: true,
        },
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '../fonts/',
          outputPath: 'fonts/',
        },
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: './assets/[name].[ext]',
              include: 'file-loader',
              fallback: 'file-loader',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024,
          // Remove quotes around the encoded URL –
          // they’re rarely useful
          noquotes: true,
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        include: resolve(__dirname, 'src/'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CopyWebpackPlugin([{ from: 'assets' }]),
    new HtmlWebpackPlugin({
      title: 'Shindigit Your Ultimate Event Planner',
      favicon: './assets/favicon_io/favicon.ico',
      manifest: './src/manifets.json',
      template: '../index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,900'
          ),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: new RegExp(
            'https://us1.prisma.sh/boaz-blake-8951e1/shindigit/dev'
          ),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('sockjs-node/info'),
          handler: 'StaleWhileRevalidate',
        },
      ],
    }),
    new WebpackPwaManifest({
      lang: 'en-US',
      name: 'Shindigit Your Ultimate Event Planner',
      short_name: 'Shindigit',
      display: 'standalone',
      description: 'Shindigit Your Ultimate Event Planner!',
      background_color: '#01579b',
      theme_color: '#01579b',
      'theme-color': '#01579b',
      start_url: '.',
      scope: '/',
      icons: [
        {
          src: resolve('src/assets/favicon_io/favicon.ico'),
          sizes: [16, 32],
          destination: join('assets', 'icons'),
        },
      ],
    }),
    new webpack.ProvidePlugin({
      m: 'mithril', //Global access
      utils: resolve(__dirname, './src/utils/index.js'),
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${join(__dirname, 'src')}/**/*`, { nodir: true }),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
