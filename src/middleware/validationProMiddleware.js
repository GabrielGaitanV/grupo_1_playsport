const { body } = require('express-validator');

const validationProduct = [

    body('product_name')
        .notEmpty()
        .isLength({min:5})
        .withMessage('El nombre del producto debe tener almenos 5 caracteres'),

    body('product_description')
        .notEmpty()
        .isLength({min:20})
        .withMessage('La descripcion del producto debe terner almenos 20 caracteres'),

    body('product.price')
        .notEmpty()
        .isLength({min:4})
        .withMessage('El precio del producto debe tener almenos 4 caracteres')
]

module.exports = validationProduct;