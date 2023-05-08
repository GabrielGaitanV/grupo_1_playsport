const express = require("express");
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController')


//paraa api
router.get('/', apiProductsController.list);

router.get('/lastProduct', apiProductsController.lastProduct)

router.get('/detail/:id', apiProductsController.detail);

module.exports = router;