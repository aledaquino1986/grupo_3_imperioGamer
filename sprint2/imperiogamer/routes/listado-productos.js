var express = require('express');
var router = express.Router();
var listadoProdsController= require("../controllers/listadoProdsController");

/* GET listado productos para el admin. */
router.get('/', listadoProdsController.mostrarListadoProds);

module.exports = router;
