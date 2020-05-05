var express = require('express');
var router = express.Router();
var productController = require('../controllers/productDetailUserController')

/* GET detalle de producto individual del usuario . */
router.get('/', productController.mostrarDetalleProducto);


module.exports = router;
