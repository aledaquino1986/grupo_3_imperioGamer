var express = require('express');
var router = express.Router();
var productsController= require("../controllers/productsController");
var adminCheckLogin = require("../middlewares/adminCheck");
var path = require('path')
const multer = require('multer');
var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'public/images/productos');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});
var upload = multer({storage:storage});
/* GET listado productos para el admin. */

router.get('/', adminCheckLogin, productsController.listadoDeProductos);

router.get('/create', adminCheckLogin, productsController.mostrarCargaProd);
router.post('/', upload.any(), productsController.cargaProducto);

router.get('/:id', adminCheckLogin, productsController.mostrarDetalleProducto);
router.delete('/:id', productsController.delete);

router.get('/:id/edit', adminCheckLogin, productsController.formEdit);
router.put('/:id',upload.any(), productsController.edit);




module.exports = router;
