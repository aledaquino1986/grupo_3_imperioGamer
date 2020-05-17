const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
var {check, validationResult, body} = require('express-validator');

let registerController = {
/* Renderea página de registro. */
    mostrarPaginaRegistro: function(req, res, next) {
        res.render('register');    
   },
   nuevoUsuario: function(req, res, next){
       let errors = validationResult(req);
       if(!errors.isEmpty()){
        return res.render('register', {errors: errors.errors})
       }
       let nuevoUsuario = {};
       let encriptado = bcrypt.hashSync(req.body.password,10);
    if( usuarios == "" ){
        nuevoUsuario.id = 1
    }else{
        let ultimoUsuario =  usuarios[usuarios.length-1]
        nuevoUsuario.id= ultimoUsuario.id + 1
    }; 

           nuevoUsuario.nombre = req.body.nombre;
           nuevoUsuario.apellido= req.body.apellido;
           nuevoUsuario.email= req.body.email;
           nuevoUsuario.contrasenia= encriptado;
           nuevoUsuario.avatar = req.files[0].filename;
           

           usuarios.push(nuevoUsuario)
        let usuarioSubirJSON = JSON.stringify(usuarios)
        fs.writeFileSync(usuariosFilePath,usuarioSubirJSON)

        res.redirect('/ingreso-usuario')
   }

}

module.exports = registerController