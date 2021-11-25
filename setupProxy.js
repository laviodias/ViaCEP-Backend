const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'https://via-cep.herokuapp.com/', changeOrigin: true, secure: false }));
    app.use(proxy('/firebase', { target: 'https://via-cep.herokuapp.com/', changeOrigin: true, secure: false  }));
}