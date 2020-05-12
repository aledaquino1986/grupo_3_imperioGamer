const fs = require('fs');
const products = JSON.parse(fs.readFileSync('../imperiogamer/data/productos.json',{encoding:'utf-8'}));

let productDetailController = {
    /* Renderea página detalle de producto. VISTA DEL USUARIO*/
        mostrarDetalleProducto: function(req, res, next) {
            res.render('productDetail', {
                title: "Resident Evil 3"
            });
            
       }

    }


 module.exports = productDetailController