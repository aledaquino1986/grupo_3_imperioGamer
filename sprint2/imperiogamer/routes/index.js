var express = require('express');
var router = express.Router();
var homeController = require("../controllers/homeController");

/* GET HOME. */
router.get('/', homeController.mostrarHome);
router.get('/search', homeController.search);

module.exports = router;
