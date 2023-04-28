const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middleware/authMiddleware');
const validationProduct = require ('../middleware/validationProMiddleware');

// use multer
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
       cb(null, 'public/images/ropa-deportiva'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}img${path.extname(file.originalname)}`);  } 
  })
  
  const uploadFile = multer({ storage });
//end use multer

router.get('/products/:id', productsController.detail);

router.get('/create', authMiddleware, validationProduct, productsController.create);//vistas formulario de creacion

router.post('/create', uploadFile.single('product_image'), productsController.store);//funcionalidad de creacion de producto

router.get('/edit/:id', authMiddleware, validationProduct, productsController.edit);//vistas formulario de edicion

router.post('/edit/:id', uploadFile.single('product_image'), productsController.update);//funcionalidad edicion de producto

router.post('/delete/:id', authMiddleware, productsController.destroy)
module.exports = router;
  