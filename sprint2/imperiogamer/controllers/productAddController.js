const fs = require('fs')
const path = require('path');
const productosFilePath=path.join(__dirname,'../data/productos.json')
let products = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))

let productAddController = {

    /* Renderea página de carga de productos del admin */

    mostrarCargaProd: function(req, res, next) {
        res.render('productAdd');

   },

   cargaProducto:function(req, res, next){
    
        let nuevoProducto = {}
        if( products == "" ){
			nuevoProducto.id = 1
		}else{
			let ultimoProducto =  products[products.length-1]
            nuevoProducto.id= ultimoProducto.id + 1
           // console.log(ultimoProducto)
		};
        
    
        nuevoProducto.name = req.body.name,
        nuevoProducto.discount = req.body.discount,
        nuevoProducto.description = req.body.description,
        nuevoProducto.codigo = req.body.codigo,
        nuevoProducto.categoria = req.body.categoria,
        nuevoProducto.price = req.body.price,
        nuevoProducto.garantia = req.body.garantia,
        nuevoProducto.color = req.body.color,
        nuevoProducto.proveedor = req.body.proveedor,
        nuevoProducto.image = req.file[0]
        console.log(nuevoProducto)
        products.push(nuevoProducto)
        let productoSubirJSON = JSON.stringify(products)
		fs.writeFileSync(productosFilePath,productoSubirJSON)
        res.send(products)
    }
}

module.exports = productAddController;