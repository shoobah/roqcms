var argv = require('yargs').default('production', false).argv

module.exports = {
    jwtSecret: '6dcf7e9c-49d6-432b-b939-ec3f00cf406d',
    port: process.env.port || 8000,
    url: 'http://localhost:8000',
    publicPath: argv.production ? './public/production' : '.public/development'
}