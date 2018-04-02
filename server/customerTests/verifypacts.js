const pact = require('@pact-foundation/pact-node');

const opts = {
    providerBaseUrl: 'http://localhost:3001',
    providerStatesSetupUrl: 'http://localhost:3001/test/setup',
    pactUrls: ['http://10.222.43.27:8080/pacts/provider/ProductService/consumer/client/latest'],
    publishVerificationResult: true,
    providerVersion: '1.0.0'
};

pact.verifyPacts(opts).then(() => {
   console.log('success');
   process.exit(0);
}).catch((err) => {
    console.log('failed', err);
    process.exit(1);
});