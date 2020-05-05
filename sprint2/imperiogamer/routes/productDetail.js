var express = require('express');
var router = express.Router();
var productController = require('../controllers/productDetailController')

/* GET detalle de producto individual del admin. */

router.get('/', productController.listadoDeProductos);
router.get('/:id', productController.mostrarDetalleProducto);

module.exports = router;
