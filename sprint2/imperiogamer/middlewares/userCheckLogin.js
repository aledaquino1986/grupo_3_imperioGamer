const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
var {check, validationResult, body} = require('express-validator');

function userCheck(req,res,next){

    if(req.session.login == undefined){
        next();
    } else {
        res.redirect('/')
    }
 
}

module.exports = userCheck