var express = require('express');
var router = express.Router();
var registerController = require("../controllers/registerController");

/* GET página de registro. */
router.get('/', registerController.mostrarPaginaRegistro)

module.exports = router;
