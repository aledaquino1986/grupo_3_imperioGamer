const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('../imperiogamer/data/usuarios.json',{encoding:'utf-8'}));
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json');
var {check, validationResult, body} = require('express-validator');
const db = require('../database/models');


let ingresoUsuarioController = {

    /* Renderea página de login. */

    mostrarPaginaLogin: function(req, res, next) {
       
        
        let usuarioRegistrado = req.session.login
        if(usuarioRegistrado){
           res.redirect("/user/profile/"+ usuarioRegistrado)
        } else {
            res.render('ingreso-usuario', {
                title: "Ingresá a tu cuenta",
                user: req.session.login,
                
            });

            console.log("entré a user: " + user)
        }
   },

   login: function (req, res, next) {
    let errors = validationResult(req)
    let email = req.body.email;
    
    db.usuarios.findOne({ where: { email: email} })
    .then(function(resultado){
        if(resultado != null){
        let password = req.body.password

        if (bcrypt.compareSync(req.body.password, resultado.dataValues.password)) {

            req.session.login = resultado.dataValues
                if(req.body.check != undefined){
                    let tiempo = 1000 * 60 * 60
                res.cookie('recordame', resultado.dataValues.id,{ maxAge:tiempo})
                }

            res.redirect('/user/profile/'+ resultado.dataValues.id)

        }  else {
            res.render("ingreso-usuario",{
                title: "Ingresá a tu cuenta", 
                errors: errors.errors,
            })
        }
        res.redirect('/user/profile/'+ resultado.dataValues.id)
        } else {
            res.render("ingreso-usuario",{
                title: "Ingresá a tu cuenta", 
                errors: errors.errors,
            })
        }
    })

    
    /*
    let usuarioQueSeLoguea = usuarios.find(function (element) {
        return element.email == req.body.email;
    }) 

    if (usuarioQueSeLoguea != undefined) {
        if (bcrypt.compareSync(req.body.password, usuarioQueSeLoguea.contrasenia)) {
            req.session.login = usuarioQueSeLoguea;
            console.log(req.session.login)
            if(req.body.check != undefined){
                 //if checkbox tildado (creamos cookie) --> res.cookie("usuario logueado", "Usuarioid")
                 let tiempo = 1000 * 60 * 60
                res.cookie('recordame', usuarioQueSeLoguea.email,{ maxAge:tiempo})
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
    */
    },

    adminPanel: function(req, res, next) {
        res.render('adminPanel');

    },

}



module.exports = ingresoUsuarioController