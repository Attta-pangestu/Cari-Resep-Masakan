const webpack = require('webpack') ; 
const path = require('path') ; 
const htmlWebpackPlugin = require('html-webpack-plugin'); 


module.exports = {
    entry : './src/app.js', 
    output : {
        path : path.resolve(__dirname, 'dist'), 
        filename : 'bundle.js'
    }, 
    plugins : [
        new htmlWebpackPlugin({
            template : './src/template.html', 
            filename : 'index.html'
        }), 
    ],
    module : {
        rules : [
            
            // style loader 
            {
                test : /\.css$/,
                use : [
                    // Loader style
                    {
                        loader : "style-loader"
                    },
                    // Loader CSS
                    {
                        loader : "css-loader"
                    }
                ], 
            }
        ]
        
    }, 
    
    
}