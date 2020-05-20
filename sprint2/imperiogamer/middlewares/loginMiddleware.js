const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
var {check, validationResult, body} = require('express-validator');

let loginMiddleware = {


 login: function (req, res, next) {
    
    let usuarioQueSeLoguea = usuarios.find(function (element) {
        return element.email == req.body.email;
    }) 
    
    if (usuarioQueSeLoguea != undefined) {
        if (bcrypt.compareSync(req.body.password, usuarioQueSeLoguea.contrasenia)) {
            req.session.login = usuarioQueSeLoguea;
            let usuarioLogueado = req.session.login
            next();
            //if checkbox tildado (creamos cookie) --> res.cookie("usuario logueado", "Usuarioid")
        } else {
            res.redirect("/ingreso-usuario")
        }
    }
    console.log(usuarioQueSeLoguea);
    console.log(usuarioQueSeLoguea.contrasenia);
    
     

    }
}


module.exports = loginMiddleware