const fs = require('fs')
const path = require('path');
const productosFilePath=path.join(__dirname,'../data/productos.json')
let db = require('../database/models');
const { Sequelize } = require('../database/models');
let products = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))

const Op = Sequelize.Op



let homeController = {

    /* Renderea el home. */

  
    mostrarHome: function(req, res, next) {
      if (req.session.login != undefined) {
        var usuarioLogueado = req.session.login
      }
      var populares = products.filter(function(producto){
        return producto.codigo == "populares";
      })
      var ofertas = products.filter(function(producto){
        return producto.codigo == "ofertas";
      })
        res.render('index',{
          title: "Imperio Gamer",
          productos: products,
          populares: populares,
          ofertas: ofertas,
          user: usuarioLogueado
        })
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