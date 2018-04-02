const app = require('../productService');
const products = require('../models/products');

const port = process.env.PORT || 3001;

app.post('/test/setup', (req, res) => {
    const state = req.body.state;
    switch (state) {
        case 'it has one product':
            products.create({name: 'Foo', img: 'https://webshop.com/img/foo.png', price: 1, stock: 1});
            break;
        default:
            break;
    }
    res.end();
});

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('SERVER: ProductService listen at: ', port);
});
