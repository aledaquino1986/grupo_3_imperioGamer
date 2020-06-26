const fs = require('fs')
const path = require('path');
const productosFilePath=path.join(__dirname,'../data/productos.json')
let db = require('../database/models');
const { Sequelize } = require('../database/models');
let products = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))

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
        where: {section: "populares"}, LIMIT: 8 
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
      
      console.log(populares)
      console.log(ofertas)
   },

   search: function(req, res) {
    let userSearch = req.query.search
    db.products.findAll({where: {product_name: {[Op.like]: "%" + userSearch + "%" }}})
        
           .then(function(products) {
             res.render("search", {
               title: 'busqueda',
               products:products,
               user: req.session.login
              })
           })
    
  },

}


module.exports = homeController