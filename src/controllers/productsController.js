const path = require('path');

const controller = {
  detail: (req, res) => {
    // vistas detalle de producto
    res.sendFile(path.resolve(__dirname, '../views/product-detail.html'));
  },
};

module.exports = controller;
