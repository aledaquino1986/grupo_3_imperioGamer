var express = require('express');
var router = express.Router();
var ingresoUsuarioController = require("../controllers/ingresoUsuarioController");
var userCheckLogin = require("../middlewares/userCheckLogin");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
const { check, validationResult, body} = require("express-validator");

 

/* GET página de logueo */
router.get('/', ingresoUsuarioController.mostrarPaginaLogin); 
router.post('/',[
    check("email").isEmail().withMessage('Debe ingresar un mail valido'),
    ],[

    
    body("email").custom(function(value) {
      
      for(let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == value) {
          return true;
        }
      }
  
      return false
    }).withMessage("Email Incorrecto"),

    body("password").custom(function(value) {
      
      for(let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == value) {
          return true;
        }
      }
  
      return false
    }).withMessage("Contraseña Invalida")


], ingresoUsuarioController.login);


router.get('/panel-admin', ingresoUsuarioController.adminPanel); 
router.get('/perfil/', ingresoUsuarioController.perfilUsuario); 

module.exports = router;
