var express = require("express");
var router = express.Router();
var usuariosApiController = require("../../controllers/api/apiUsuariosControllers")
var adminCheckMiddleweare = require("../../middlewares/adminCheck")

router.get("/", usuariosApiController.encontrarUsuario)


module.exports = router