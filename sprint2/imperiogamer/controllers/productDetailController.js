const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync('../imperiogamer/data/productos.json',{encoding:'utf-8'}));

let productDetailController = {
    /*renderea la lista de productos del lado del ADMINiSTRADOR*/
       listadoDeProductos: function(req, res, next){
           res.render('listado-productos', {
               productos: products
           });
           
       },

       mostrarDetalleProducto: function(req, res, next){
        let producto = products.find(function(element) {
            return element.id == req.params.id
        });
        
        let title = producto.name;
        res.render("productDetailAdmin", {
            title: title,
            producto: producto,

        });

        
    },

    delete: (req, res, next) => {
		let productsQueQuedan = products.filter(function(element) {
			return element.id != req.params.id
		});
	
		let productosModificadosJson = JSON.stringify(productsQueQuedan);
		fs.writeFileSync('../imperiogamer/data/productos.json', productosModificadosJson)
	
		res.redirect("/productos");
     

}

}
    
    module.exports = productDetailController