var express = require('express');
var router = express.Router();
var ingresoUsuarioController = require("../controllers/ingresoUsuarioController");


/* GET página de logueo */
router.get('/', ingresoUsuarioController.mostrarPaginaLogin); 

module.exports = router;
