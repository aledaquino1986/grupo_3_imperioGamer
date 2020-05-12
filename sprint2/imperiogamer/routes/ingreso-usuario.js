var express = require('express');
var router = express.Router();
var ingresoUsuarioController = require("../controllers/ingresoUsuarioController");


/* GET página de logueo */
router.get('/', ingresoUsuarioController.mostrarPaginaLogin); 
router.post('/', ingresoUsuarioController.postLogin);

module.exports = router;
