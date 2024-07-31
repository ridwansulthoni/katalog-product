const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRouters = require('./routes/productRouters');
const categoriRouters = require('./routes/categoriRouters');
const brandRouters = require('./routes/brandRouters');

app.use(bodyParser.json());
app.use('/api/v1/produk', productRouters);
app.use('/api/v1/kategori', categoriRouters);
app.use('/api/v1/merek', brandRouters);

module.exports = app