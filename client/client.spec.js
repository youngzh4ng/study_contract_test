const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const provider = require('./mockServer/provider');
const client = require('./client');
const interactions = require('./mockServer/interactions');

const expect = chai.expect;
chai.use(sinonChai);

describe('pruduce handling', ()=> {
    const sandBox = sinon.createSandbox();

    before(async function () {
        this.timeout(10000);
        await provider.setup();
    });

    afterEach(() => {
        sandBox.restore();
    });
    after(async function () {
        this.timeout(10000);
        await provider.finalize();
    });

    describe('#getAllProducts', () => {
        it('should get product list from server', async function () {
            await provider.addInteraction(interactions.getProductList);
            const consoleSpy = sandBox.spy(console, 'log');
            await client.getAllProducts();
            expect(consoleSpy).to.have.been.calledWith('CLIENT: Current products are: Foo');
            await provider.verify();
        });
    });
});