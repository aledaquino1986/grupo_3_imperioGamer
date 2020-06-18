const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
var {check, validationResult, body} = require('express-validator');
let db = require('../database/models');

let registerController = {
/* Renderea página de registro. */
    mostrarPaginaRegistro: function(req, res, next) {
        
        res.render('register');    
   },
   nuevoUsuario: function(req, res, next){
    let email = req.body.email
    let errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.render('register', {errors: errors.errors})
           } else {
           db.usuarios.findOne({ where: { email: email } })
            .then(function(resultado){
            if(resultado == null){
                
                let encriptado = bcrypt.hashSync(req.body.password, 10);

                let avatar;
                if (req.file === undefined) {
                  avatar = "unnamed.png"
              } else {
                  avatar = req.files[0].filename;
              }
                    
          
                 db.usuarios.create({
                  first_name: req.body.nombre,
                  last_name: req.body.apellido,
                  dni: req.body.dni,
                  direccion: req.body.direccion,
                  tel: req.body.telefono,
                  email: req.body.email,
                  password: encriptado,
                  avatar: avatar,
                  localidad_id: 1,
                  provincia_id: 1, 
                 }).then(function(usuarioCreado){

                if(!errors.isEmpty()){
                    return res.render('register', {errors: errors.errors})
                } else {

                    db.usuarios.findOne({ where: { email: email } }).then(function(resultado){
                        req.session.login = resultado.dataValues.id
                        res.redirect('/user/profile/'+ resultado.dataValues.id)
                    })
                }

                      
    
                 })
          
                
            } else {
            if(resultado.dataValues.email ==  email){
                res.redirect('/ingreso-usuario')
               }

                 //req.session.login = id+1
                 /* req.session.login = 
                          console.log(req.session.login);
                          
                          res.render('/user/profile/'+ nuevoUsuario.id) */

              //   let usuarioEnBase = usuarios.find(function (element) {
              //       return element.email == req.body.email
                  
              //   })
          
                 /* if (usuarioEnBase != undefined) {
                      res.redirect("ingreso-usuario");
              } else { 
                 
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
                          nuevoUsuario.dni= req.body.dni;
                          nuevoUsuario.direccion= req.body.direccion;
                          nuevoUsuario.telefono= req.body.telefono;
                          nuevoUsuario.email= req.body.email;
                          nuevoUsuario.contrasenia= encriptado;
                          if (req.file === undefined) {
                              nuevoUsuario.avatar = "unnamed.png"
                          } else {
                              nuevoUsuario.avatar = req.files[0].filename;
                          }
          
                          usuarios.push(nuevoUsuario)
                          let usuarioSubirJSON = JSON.stringify(usuarios)
                          fs.writeFileSync(usuariosFilePath,usuarioSubirJSON)
                          req.session.login = nuevoUsuario
                          console.log(req.session.login);
                          
                          res.render('/user/profile/'+ nuevoUsuario.id)
                  } */
                
               }
    })
    .catch(err =>{
        console.log(err)
    })
      

    }
       
   }
      

}

module.exports = registerController