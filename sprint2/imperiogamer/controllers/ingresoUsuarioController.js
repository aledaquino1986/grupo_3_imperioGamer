const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
var {check, validationResult, body} = require('express-validator');


let ingresoUsuarioController = {

    /* Renderea página de login. */

    mostrarPaginaLogin: function(req, res, next) {
       
        
        let usuarioRegistrado = req.session.login
        if(usuarioRegistrado){
           res.redirect("/user/profile/"+usuarioRegistrado.id)
        } else {
            res.render('ingreso-usuario', {
                title: "Ingresá a tu cuenta",
                usuario: req.session.login
                
            });
        }
   },

   login: function (req, res, next) {
    let errors = validationResult(req)

    let usuarioQueSeLoguea = usuarios.find(function (element) {
        return element.email == req.body.email;
    }) 

    if (usuarioQueSeLoguea != undefined) {
        if (bcrypt.compareSync(req.body.password, usuarioQueSeLoguea.contrasenia)) {
            req.session.login = usuarioQueSeLoguea;
            console.log(req.session.login)
            if(req.body.check != undefined){
                 //if checkbox tildado (creamos cookie) --> res.cookie("usuario logueado", "Usuarioid")
                res.cookie('recordame', usuarioQueSeLoguea.email,{ maxAge: 60000 * 1000})
            }
            res.redirect("/")
        } else {
            res.render("ingreso-usuario",{
                title: "Ingresá a tu cuenta", 
                errors: errors.errors,
            })
        }
    } else {
        
        //console.log(errors)
         res.render('ingreso-usuario',{
            title: "Ingresá a tu cuenta",
            errors: errors.errors
        })
    }

   
    //console.log(usuarioQueSeLoguea);
    //console.log(usuarioQueSeLoguea.contrasenia);

    },

    adminPanel: function(req, res, next) {
        res.render('adminPanel');

    },

}



module.exports = ingresoUsuarioController