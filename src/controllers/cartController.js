const path = require('path');

const controller = {
  index: (req, res) => {
    // vistas de carrito de compras
    res.sendFile(path.resolve(__dirname, '../views/cart.html'));
  },
};

module.exports = controller;
