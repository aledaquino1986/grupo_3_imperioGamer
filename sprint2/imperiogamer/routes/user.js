var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

/* GET HOME. */
router.get('/products',userController.listarProductos);
router.get('/detail/:id',userController.mostrarDetalleProducto)
router.get('/profile/:id', userController.mostrarPerfil);
router.post('/profile/:id', userController.editPerfil);
module.exports = router;
