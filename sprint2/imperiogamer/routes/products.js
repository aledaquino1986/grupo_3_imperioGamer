var express = require('express');
var router = express.Router();
var productsController= require("../controllers/productsController");
var userCheckLogin = require("../middlewares/userCheckLogin");
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

router.get('/', productsController.listadoDeProductos);

router.get('/create',userCheckLogin, productsController.mostrarCargaProd);
router.post('/', upload.any(), productsController.cargaProducto);

router.get('/:id', userCheckLogin, productsController.mostrarDetalleProducto);
router.delete('/:id', productsController.delete);

router.get('/:id/edit', userCheckLogin, productsController.formEdit);
router.put('/:id',upload.any(), productsController.edit);




module.exports = router;
