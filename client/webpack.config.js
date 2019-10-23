const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { 
    main: './src/index.ts',
   },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
       {
        test: /\.css$/,
        use: [
            {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          name: '/pages/[name].html',
        }
      },
      {
        test: /\.png|jpe?g|gif$/,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]',
        }
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: '/svg/[name].[ext]',
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/style.css',
    }),
  ],
  devServer: {
    stats: 'errors-only',
    overlay: true,
    contentBase: path.join(__dirname, 'dist/pages/'),
    compress: false,
    port: 3030,
    open: true,

  }
};