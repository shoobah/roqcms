var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require("./make-webpack-config")({
    development: true,
    devPanel: false,
    devtool: 'eval',
    debug: true
})

new WebpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    colors: true,
    progress: true,
    hot: true,
    historyApiFallback: true  
}).listen(3000, 'localhost', function(err, result){
    if (err) {
        console.error(err)
    }
    console.log('Lyssnar på localhost:3000')
})