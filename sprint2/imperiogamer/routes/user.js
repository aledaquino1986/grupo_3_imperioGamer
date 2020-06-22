var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");
var userCheckLogin = require("../middlewares/userCheckLogin");
var {check, validationResult, body} = require('express-validator');

/* GET HOME. */
router.get('/products',userController.listarProductos);
router.get('/detail/:id',userController.mostrarDetalleProducto)
router.get('/profile/:id', userCheckLogin, userController.mostrarPerfil);
router.post('/profile/:id', [
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








module.exports = router;
