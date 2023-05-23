const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = path.join(__dirname, '.');
const webpackEnv = process.env.NODE_ENV || 'development';

// //const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './index.tsx', // or './index.tsx' for TypeScript
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   },
//     module: {
//     rules: [
//       {
//         test: /\.(tsx|ts|jsx|js|mjs)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'ts-loader',
//           options: {
//             transpileOnly: true,
//           },
//         },
//       },
//       // Add the following rule to handle Babel transformations
//       {
//         test: /\.(tsx|ts|jsx|js|mjs)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     // alte pluginuri
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   },
// };

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules\/(?!react-native)/, // Exclude all node_modules except react-native
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-private-methods',
              '@babel/plugin-proposal-private-property-in-object',
            ],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    historyApiFallback: true, // Enable history fallback for single-page applications
    devMiddleware: {
      publicPath: '/', // Set the public path for the dev server
    },
    port: 8080,
  },
};

// module.exports = {
//   mode: webpackEnv,
//   entry: {
//     app: path.join(rootDir, './index.js'),
//   },
//   output: {
//     path: path.resolve(rootDir, 'dist'),
//     filename: 'app-[hash].bundle.js',
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(tsx|ts|jsx|js|mjs)$/,
//         exclude: /node_modules/,
//         loader: 'ts-loader',
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, './index.html'),
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//   ],
//   resolve: {
//     extensions: [
//       '.web.tsx',
//       '.web.ts',
//       '.tsx',
//       '.ts',
//       '.web.jsx',
//       '.web.js',
//       '.jsx',
//       '.js',
//     ], // read files in fillowing order
//     alias: Object.assign({
//       'react-native$': 'react-native-web',
//     }),
//   },
// };

