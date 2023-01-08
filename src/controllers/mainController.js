const path = require('path');

const controller = {
  index: (req, res) => {
    //vistas de index
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
  }
};

module.exports = controller;
