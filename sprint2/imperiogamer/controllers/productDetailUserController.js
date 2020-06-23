const fs = require('fs');
const products = JSON.parse(fs.readFileSync('../imperiogamer/data/productos.json',{encoding:'utf-8'}));
let db = require('../database/models');

let productDetailController = {
    /* Renderea página detalle de producto. VISTA DEL USUARIO*/
        mostrarDetalleProducto: function(req, res, next) {
            let user = req.session.login

         db.products.findByPk(req.params.id,{include:
             [{association: "carritos"}, {association: "platforms"}, {association: "languages"}, {association: "categories"}]})
             .then(function(product){
                res.render("productDetail", {
                    title: product.product_name,
                    producto: product,
                    user: req.session.login
                });
                console.log("entre a user: " + user.is_admin)
             })
           
       }

    }


     
 module.exports = productDetailController