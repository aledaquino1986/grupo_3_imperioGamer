const fs = require('fs');
const products = JSON.parse(fs.readFileSync('../imperiogamer/data/productos.json',{encoding:'utf-8'}));

let productDetailController = {
    /*renderea la lista de productos del lado del ADMINiSTRADOR*/
       listadoDeProductos: function(req, res, next){
           res.render('listado-productos', {
               productos: products
           });
           
       },

       mostrarDetalleProducto: function(req, res, next){
        res.render('productDetailAdmin', {
            productos: products
        });
    
    }

}
    
    module.exports = productDetailController