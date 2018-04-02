const path = require('path');
const pact = require('pact');

const provider = pact({
    consumer: 'client',
    provider: 'ProductService',
    port: 1234,
    log: path.resolve(__dirname, '../../logs', 'mockserver-integration.log'),
    logLevel: 'ERROR',
    dir: path.resolve(__dirname, '../../pacts'),
    spec: 2
});

module.exports = provider;