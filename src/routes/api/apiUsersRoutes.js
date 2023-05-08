const express = require("express");
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');

//para las apis
router.get('/', apiUsersController.list);

router.get('/lastUser', apiUsersController.lastUser);

router.get('/detail/:id', apiUsersController.detail);

module.exports = router