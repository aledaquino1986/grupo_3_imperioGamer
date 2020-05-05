var express = require('express');
var router = express.Router();
var productAddController = require("../controllers/productAddController");
var path = require('path')
var multer = require ('multer')
var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'public/image/');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

var upload = multer({storage:storage});
/* GET página de carga de productos del admin. */
router.get('/', productAddController.mostrarCargaProd);
router.post('/', upload.any(), productAddController.cargaProducto);
module.exports = router;
