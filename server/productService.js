const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('pact example server'));
app.get('/products',controller.get);
app.post('/products',controller.create);

module.exports = app;


