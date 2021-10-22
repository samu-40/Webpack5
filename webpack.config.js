const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')

const rulesForJS = {

    test: /\.js$/,
    loader: 'babel-loader',
    options: {

        presets: [

            [
                '@babel/preset-react',
                {

                    runtime: 'automatic'

                }
            ]

        ]

    }

}

const rulesForStyles = {

    test: /\.css$/,
    use: [

        'style-loader',
        'css-loader'
    ]

}

module.exports = ( env, argv ) => {

    const { mode } = argv
    const isProduction = mode === 'production'

    return {

        output: {
    
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            // path: path.resolve( __dirname, 'build' ) <-- Nombrar la carpeta de salida
    
        },
        
        plugins: [
    
            new HtmlWebpackPlugin({ template: 'src/index.html' })
            
        ],
    
        module: {
    
            rules: [
    
                rulesForJS,
                rulesForStyles
    
            ]
    
        },
    
        devServer: {
    
            open: true,
    
        }

    }

}