var express = require('express');
var router = express.Router();
var productCartControllers = require("../controllers/productCartControllers")


/* GET carrito vacio. */
router.get('/', productCartControllers.verCarritoVacio);
/* GET productos que compró el usuario */
router.get('/tus-productos', productCartControllers.verProductosUsuario);
/* GET página en donde el usuario pone sus datos */
router.get('/tus-productos/datos-usuario', productCartControllers.agregarDatosUsuario);
/* GET página en donde el usuario confirma sus datos y hace la compra*/
router.get('/tus-productos/datos-usuario/confirmar-datos', productCartControllers.confirmarDatos);
/* GET página que le agradece al usuario por la compra*/
router.get('/gracias', productCartControllers.agradecerUsuario);

module.exports = router;
