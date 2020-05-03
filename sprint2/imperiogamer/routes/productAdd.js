var express = require('express');
var router = express.Router();
var productAddController = require("../controllers/productAddController");

/* GET página de carga de productos del admin. */
router.get('/', productAddController.mostrarCargaProd);

module.exports = router;
