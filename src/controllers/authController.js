const path = require('path');

const controller = {
  login: (req, res) => {
    //vistas login
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
  },
  register: (req, res) => {
    // vistas de registro
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
  },
};

module.exports = controller;
