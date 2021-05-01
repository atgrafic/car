const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: { index : "./src/index.js",
    form : "./src/form.js",},
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].bundle.js",},
    devServer:{
    contentBase: path.join(__dirname,"dist"),
    port: 9000,
    watchContentBase: true ,
   // historyApiFallback: true

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
            }),
        new HtmlWebpackPlugin({
                template: './src/form.html',
                inject: true,
                chunks: ['form'],
                filename: 'form.html'
                }),
        new CopyPlugin([
              { from: "src/assets/image", to: "./image" },
            ]),
        ],
    module: {
        rules: [{
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader" ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
                loader: "file-loader",
                options: {
                    outputPath: './image',
                    name: "[name].[ext]",
                },
            },
        },
        {
            test: /\.(html)$/,
            use: ["html-loader"]
        },

          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env']
            }
            }
            }
        ]

        }
    }