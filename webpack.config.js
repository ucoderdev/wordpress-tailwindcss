const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    theme: path.resolve(__dirname, 'assets/src/app.js')
  },
  resolve: {
    alias: {
      '~': path.resolve('node_modules')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors'
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css|less|s[ac]ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: true }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ],
      },
      {
        test: /\.(svg|eot|otf|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
    ],
  },
  plugins: [],
};

module.exports = (env, argv) => {
  const fileName = {
    js: '[name].js',
    css: '[name].css',
  }

  if (argv.mode === 'development') {
    config.mode = 'development';
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.mode = 'production';
  }

  config.output = {
    clean: true,
    filename: fileName.js,
    path: path.resolve(__dirname, 'assets/dist'),
  }

  config.plugins.push(new MiniCssExtractPlugin({
    filename: fileName.css,
    chunkFilename: fileName.css,
  }));

  return config;
};