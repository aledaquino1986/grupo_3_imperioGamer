var express = require('express');
var router = express.Router();
var productCartControllers = require("../controllers/productCartControllers")
var userCheck = require("../middlewares/userCheckLogin");


/* GET productos que compró el usuario */
router.get('/tus-productos', userCheck,productCartControllers.verProductosUsuario);
router.post('/tus-productos/:prod/:cart',userCheck,productCartControllers.eliminarProd);
router.post('/tus-productos/:id',userCheck, productCartControllers.eliminarCarrito);
/* GET página en donde el usuario pone sus datos */
router.get('/tus-productos/datos-usuario', userCheck,productCartControllers.agregarDatosUsuario);
/* GET página en donde el usuario confirma sus datos y hace la compra*/
router.get('/tus-productos/datos-usuario/confirmar-datos', userCheck,productCartControllers.confirmarDatos);
/* GET página que le agradece al usuario por la compra*/
router.get('/gracias', userCheck,productCartControllers.agradecerUsuario);

module.exports = router;
