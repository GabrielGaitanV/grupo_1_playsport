const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const routesProduct = require('./routes/products');
const routesCart = require('./routes/cart');
const routesAuth = require('./routes/auth');
const routesMain = require('./routes/main');

const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(port, () => console.log('Servidor de PlaySport funcionando'));

app.use('/', routesMain);
app.use('/products', routesProduct);
app.use('/cart', routesCart);
app.use('/auth', routesAuth);
