var express = require('express');
var router = express.Router();
var registerController = require("../controllers/registerController");
var path = require('path');
var {check, validationResult, body} = require('express-validator');


const multer = require('multer');
var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'public/users/avatars');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});
var upload = multer({storage:storage});

/* GET página de registro. */
router.get('/',registerController.mostrarPaginaRegistro)
router.post('/',upload.any(),[
    check("nombre").isLength({min:1}).withMessage('El nombre no puede estar vacio'),
    check("apellido").isLength({min:1}).withMessage('El apellido no puede estar vacio'),
    check("email").isEmail().withMessage('Debe ingresar un mail valido'),
    check("password").isLength({min:8}).withMessage('La contraseña debe tener un minimo de 8 caaracteres'),
    check("DNI").isInt().withMessage('Datos incorrectos'),
],registerController.nuevoUsuario)

module.exports = router;
