var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");
var productDetailUserController = require("../controllers/productDetailUserController");
var userCheckLogin = require("../middlewares/userCheckLogin");
var {check, validationResult, body} = require('express-validator');

/* GET HOME. */
router.get('/products', productDetailUserController.listarProductos);
router.get('/products/:category_id',productDetailUserController.juegos);
router.get('/detail/:id',productDetailUserController.mostrarDetalleProducto)
router.get('/profile/:id', userCheckLogin, userController.mostrarPerfil);
router.post('/profile/edit/:id', [
  check('password').custom((value, { req }) => {
    if(value.length !== 0 && req.body.password !== 0) {
      if (value !== req.body.password2) {
        return false;
      } else {
        return true;
      }  
    } else {
      return true
    }
  }).withMessage("Las contraseñas deben ser idénticas"),
  check('password2').custom((value, { req }) => {
    if(value.length !== 0 && req.body.password !== 0) {
      if (value !== req.body.password) {
        return false;
      } else {
        return true;
      }  
    } else {
      return true
    }
  }).withMessage("Para confirmar contraseña debe ingresar una en el campo correspondiente"),

],
 userController.editPerfil);

 router.post('/profile/deslog/:id', userController.deslogUser )
module.exports = router;
