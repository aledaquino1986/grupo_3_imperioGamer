const fs = require('fs')
const path = require('path');
let db = require('../database/models');
const { Sequelize } = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const Op = Sequelize.Op

let populares = 2;
let ofertas;

let homeController = {

    /* Renderea el home. */

  
    mostrarHome: function(req, res, next) {
      if (req.session.login != undefined) {
        var usuarioLogueado = req.session.login
      }
     
      db.products.findAll({
        where: {section: "populares"}, LIMIT: 8 ,
        order: [["id","DESC"]],
      })
      .then(function(products){
        populares = products
        db.products.findAll({
          where: {section: "ofertas" }, LIMIT: 8 ,
          order: [["id","DESC"]],
        })
        .then(function(products2){
          ofertas = products2
          res.render('index',{
            title: "Imperio Gamer",
            populares: populares,
            ofertas: ofertas,
            user: usuarioLogueado
          })
        })
      })
      

   },

   search: function(req, res) {
    let userSearch = req.query.search
    db.products.findAll({where: {product_name: {[Op.like]: "%" + userSearch + "%" }}})
        
           .then(function(products) {
             res.render("search", {
               title: 'busqueda',
               products:products,
               user: req.session.login,
               aMiles: toThousand
              })
           })
    
  },

  contacto: function(req,res){
    res.render("contacto",{
      title: "Contacto",
      user: req.session.login
    })
  },

  contactados: function(req,res){
    res.render("contactados",{
      title: "Contacto",
      user: req.session.login
    })
  }

}


module.exports = homeController