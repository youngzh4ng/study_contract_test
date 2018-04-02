const products = require('./models/products');

function get(req, res) {
    res.json(products.getAll());
}

function create(req, res) {
    const product = req.body;
    const saveProduct = products.create(product);
    res.statusCode = 201;
    res.json(saveProduct);
}

module.exports = {
    get: get,
    create: create
};