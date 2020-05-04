var express = require('express');
var router = express.Router();
var productController = require('../controllers/productDetailController')

/* GET detalle de producto individual del usuario . */
router.get('/:id', productController.mostrarDetalleProducto);
router.get('/', productController.listadoDeProductos);

module.exports = router;
