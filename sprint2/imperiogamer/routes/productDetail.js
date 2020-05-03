var express = require('express');
var router = express.Router();
var productDetailController = require('../controllers/productDetailController')

/* GET detalle de producto individual del usuario . */
router.get('/', productDetailController.mostrarDetalleProducto)

module.exports = router;
