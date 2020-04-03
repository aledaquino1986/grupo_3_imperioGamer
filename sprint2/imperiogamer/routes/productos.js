var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/detalle/', function(req, res, next) {
  res.render('productos');
});

module.exports = router;
