const fs = require('fs');
const products = JSON.parse(fs.readFileSync('../imperiogamer/data/productos.json',{encoding:'utf-8'}));

let productDetailController = {
    /* Renderea página detalle de producto. */
        mostrarDetalleProducto: function(req, res, next) {
            res.render('productDetail');
    
       },
       listadoDeProductos: function(req, res, next){
           res.render('listado-productos', {
               productos: products
           });
           
       }
    
    }
    
    module.exports = productDetailController