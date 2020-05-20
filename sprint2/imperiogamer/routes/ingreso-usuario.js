var express = require('express');
var router = express.Router();
var ingresoUsuarioController = require("../controllers/ingresoUsuarioController");
var ingresoUsuarioMiddleware = require("../middlewares/loginMiddleware");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
const { check, validationResult, body} = require("express-validator");

 

/* GET página de logueo */
router.get('/', ingresoUsuarioController.mostrarPaginaLogin); 
router.post('/', ingresoUsuarioMiddleware.login, ingresoUsuarioController.postLogin);

module.exports = router;
