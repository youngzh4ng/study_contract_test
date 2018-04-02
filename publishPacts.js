const pact = require('@pact-foundation/pact-node');
const path = require('path');

pact.publishPacts({
    pactFilesOrDirs: [path.join(process.cwd(), 'pacts')],
    pactBroker: 'http://10.222.43.27:8080',
    consumerVersion: '1.0.1'
});